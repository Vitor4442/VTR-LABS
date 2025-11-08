import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // === 1. Validação básica dos campos ===
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Campos obrigatórios ausentes." },
        { status: 400 }
      );
    }

    // === 2. Configura o transporte SMTP (usando Gmail) ===
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER || "vtrlabssolucoesdigitais@gmail.com",
        pass: process.env.GMAIL_PASS || "mdselfhspplpvdcw", // senha de app (sem espaços)
      },
    });

    // === 3. Define o conteúdo do e-mail ===
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to:
        process.env.GMAIL_TO ||
        "vtrlabssolucoesdigitais@gmail.com", // destinatário
      replyTo: email, // para responder diretamente ao remetente
      subject: `📩 Novo contato de ${name}`,
      text: `
📬 Nova mensagem recebida pelo site VTR Labs

Nome: ${name}
E-mail: ${email}
Telefone: ${phone || "(não informado)"}

Mensagem:
${message}
      `,
    };

    // === 4. Envia o e-mail ===
    await transporter.sendMail(mailOptions);

    console.log(`📨 E-mail enviado por ${name} (${email})`);

    return NextResponse.json({
      ok: true,
      message: "Mensagem enviada com sucesso!",
    });
  } catch (error: any) {
    console.error("❌ Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { message: "Falha ao enviar e-mail." },
      { status: 500 }
    );
  }
}

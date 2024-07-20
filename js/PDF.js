document.getElementById('generatePDF').addEventListener('click', async () => {
    const { PDFDocument, rgb } = PDFLib;

    const Reservas = JSON.parse(localStorage.getItem('reservas')) || [];
    const ultimaReserva = Reservas[Reservas.length - 1]; // Obtener la última reserva

    if (!ultimaReserva) {
        alert("No hay reservas disponibles para generar el PDF");
        return;
    }

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);

    const { width, height } = page.getSize();
    const fontSize = 15;
    const lineHeight = fontSize + 10;

    const drawText = (text, x, y) => {
        page.drawText(text, {
            x,
            y,
            size: fontSize,
            color: rgb(0, 0.53, 0.71),
        });
    };

    let yPosition = height - 2 * lineHeight;
    drawText(`Nombre: ${ultimaReserva.Nombre}`, 50, yPosition);
    yPosition -= lineHeight;
    drawText(`Apellido: ${ultimaReserva.Apellido}`, 50, yPosition);
    yPosition -= lineHeight;
    drawText(`Email: ${ultimaReserva.Email}`, 50, yPosition);
    yPosition -= lineHeight;
    drawText(`Teléfono: ${ultimaReserva.Telefono}`, 50, yPosition);
    yPosition -= lineHeight;
    drawText(`Fecha: ${ultimaReserva.Fecha}`, 50, yPosition);
    yPosition -= lineHeight;
    drawText(`Hora: ${ultimaReserva.Hora}`, 50, yPosition);
    yPosition -= lineHeight;
    drawText(`Servicio: ${ultimaReserva.Servicio}`, 50, yPosition);
    yPosition -= lineHeight;
    drawText(`Barbero: ${ultimaReserva.Barbero}`, 50, yPosition);

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'reserva.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

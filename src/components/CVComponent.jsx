import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";

const CVComponent = () => {
  const [cvData, setCvData] = useState(null);
  const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
  useEffect(() => {
    fetch(`${publicUrl}/cvData.json`) // Corretto il nome del file JSON qui
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => setCvData(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, [publicUrl]);

  const generatePDF = () => {
    if (!cvData) {
      console.error("CV data is not loaded yet");
      return;
    }

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text(`${cvData.nome} ${cvData.cognome}`, 20, 20);

    doc.setFontSize(16);
    doc.text("Dichiarazione Personale:", 20, 30);
    doc.setFontSize(12);
    doc.text(cvData.dichiarazionePersonale, 20, 40);

    doc.setFontSize(16);
    doc.text("Certificati:", 20, 50);
    cvData.certificati.forEach((certificato, index) => {
      doc.text(certificato, 20, 60 + 10 * index);
    });

    doc.setFontSize(16);
    doc.text("Esperienza Lavorativa:", 20, 70 + 10 * cvData.certificati.length);
    cvData.esperienzaLavorativa.forEach((esperienza, index) => {
      doc.text(
        `${esperienza.azienda} (${esperienza.periodo}): ${esperienza.posizione}`,
        20,
        80 + 10 * cvData.certificati.length + 10 * index
      );
      esperienza.descrizione.forEach((desc, idx) => {
        doc.text(
          `- ${desc}`,
          25,
          90 + 10 * cvData.certificati.length + 10 * index + 5 * idx
        );
      });
    });

    doc.setFontSize(16);
    doc.text(
      "Istruzione:",
      20,
      100 + 10 * cvData.certificati.length + 10 * cvData.esperienzaLavorativa.length
    );
    cvData.istruzione.forEach((istruzione, index) => {
      doc.text(
        `${istruzione.istituto} (${istruzione.periodo}): ${istruzione.dettagli}`,
        20,
        110 +
          10 * cvData.certificati.length +
          10 * cvData.esperienzaLavorativa.length +
          10 * index
      );
    });

    doc.save("cv.pdf");
  };

  if (!cvData) {
    return <div>Caricamento...</div>;
  }

  return (
    <div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default CVComponent;

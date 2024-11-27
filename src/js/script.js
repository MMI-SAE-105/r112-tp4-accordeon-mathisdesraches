// *** ACCORDEON ***

accordeon = document.querySelector(".accordeon");
accordeon.querySelectorAll("details").forEach((det) => (det.open = false));
    const accordions = document.querySelectorAll('.accordeon details');
  
    accordions.forEach((detail) => {
      // Ajoute un écouteur d'événements pour chaque élément details
      detail.addEventListener('click', () => {
        // Lorsque l'utilisateur clique, fermer tous les autres éléments
        accordions.forEach((otherDetail) => {
          if (otherDetail !== detail) {
            otherDetail.removeAttribute('open');
          }
        });
      });
    });
  });
  
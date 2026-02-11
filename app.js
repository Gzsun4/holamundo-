const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

function activateTab(target) {
  tabs.forEach((tab) => {
    const isActive = tab.dataset.target === target;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  panels.forEach((panel) => {
    panel.classList.toggle('active', panel.id === `panel-${target}`);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => activateTab(tab.dataset.target));
});

const patientForm = document.getElementById('patient-form');
const patientMessage = document.getElementById('patient-message');

patientForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const dni = document.getElementById('dni').value.trim();

  patientMessage.className = 'message';

  if (!/^\d{8}$/.test(dni)) {
    patientMessage.textContent = 'El DNI debe tener exactamente 8 números.';
    patientMessage.classList.add('error');
    return;
  }

  patientMessage.textContent = `Ingreso correcto. DNI ${dni} validado.`;
  patientMessage.classList.add('success');
  patientForm.reset();
});

const doctorForm = document.getElementById('doctor-form');
const doctorMessage = document.getElementById('doctor-message');

doctorForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  doctorMessage.className = 'message';

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    doctorMessage.textContent = 'Ingresa un correo válido.';
    doctorMessage.classList.add('error');
    return;
  }

  if (password.length < 8) {
    doctorMessage.textContent = 'La contraseña debe tener al menos 8 caracteres.';
    doctorMessage.classList.add('error');
    return;
  }

  doctorMessage.textContent = 'Ingreso de doctor correcto.';
  doctorMessage.classList.add('success');
  doctorForm.reset();
});

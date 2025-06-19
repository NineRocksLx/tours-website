// js/booking-logic.js

document.getElementById('bookingForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const tour = document.getElementById('tour').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  const data = { name, email, tour, date, time, timestamp: new Date() };
  console.log('[Dados prontos]', data);

  try {
    await db.collection('reservas').add(data);
    console.log('[Sucesso] Reserva registrada no Firestore');
    alert('Reserva registrada com sucesso!');
    document.getElementById('bookingForm').reset();
  } catch (err) {
    console.error('[Erro]', err.message);
    alert('Erro ao registrar reserva: ' + err.message);
  }
});

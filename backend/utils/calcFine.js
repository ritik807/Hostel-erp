export const calculateFine = (installments) => {
  let totalFine = 0;

  const today = new Date();

  installments.forEach((inst) => {
    if (inst.paid) return;

    const dueDate = new Date(inst.dueDate);

    if (today > dueDate) {
      const diffTime = today - dueDate;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      totalFine += diffDays * inst.finePerDay;
    }
  });

  return totalFine;
};
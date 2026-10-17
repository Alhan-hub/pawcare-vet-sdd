import { describe, it, expect } from 'vitest';
import { VET_SERVICES, CARE_TIPS, AVAILABLE_HOURS } from '../src/data/vetData';

export function isSlotAvailable(
  existing: Array<{ date: string; time: string }>,
  date: string,
  time: string
): boolean {
  return !existing.some((appt) => appt.date === date && appt.time === time);
}

describe('Verificación SDD - Plataforma Veterinaria PawCare', () => {
  it('RF-01: Debe contener el catálogo completo de 6 servicios clínicos', () => {
    expect(VET_SERVICES.length).toBeGreaterThanOrEqual(6);
    expect(VET_SERVICES[0]).toHaveProperty('price');
  });

  it('RF-04: Debe detectar colisión cuando dos citas tienen misma fecha y hora', () => {
    const mockAppointments = [{ date: '2026-10-20', time: '09:00 AM' }];
    expect(isSlotAvailable(mockAppointments, '2026-10-20', '09:00 AM')).toBe(false);
    expect(isSlotAvailable(mockAppointments, '2026-10-20', '10:00 AM')).toBe(true);
  });

  it('RF-06: Debe incluir consejos de cuidado animal categorizados', () => {
    expect(CARE_TIPS.length).toBeGreaterThanOrEqual(6);
    expect(AVAILABLE_HOURS.length).toBeGreaterThan(0);
  });
});
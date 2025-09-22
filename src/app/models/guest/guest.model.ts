
export interface Guest {
rsvp: any;
  id: number;
  name: string;
  email: string;
  rsvpStatus: 'Attending' | 'Not Attending' | 'Pending';
}

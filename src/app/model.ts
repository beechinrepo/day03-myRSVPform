export interface RSVP {
    name: string;
    phone: string;
    attendingDay: number;
    vegetarian: boolean;   //Yes/No button
    guest?: number;        //?:Optional
    allergies?: string[];  //array of choices
    comments: string;
  };

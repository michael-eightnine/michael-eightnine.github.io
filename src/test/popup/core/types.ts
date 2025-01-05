export enum PopupID {
  Contact = 'Contact',
  Skills = 'Skills',
  Welcome = 'Welcome'
}

export type GenericPopupProps = {
  title: string;
  popupId: PopupID;
  instanceId: number;
};

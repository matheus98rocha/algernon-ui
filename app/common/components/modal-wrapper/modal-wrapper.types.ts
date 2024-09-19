export type ModalWrapperProps = {
  open: boolean;
  handleCloseModal: () => void;
  customWidth?: string;
  children: React.ReactNode;
};

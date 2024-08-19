import Modal from './common/Modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const acceptedFilesTypes: string[] = ['jpg', 'png', 'docx', 'doc'];

function AcceptedFileTypesModal({ isOpen, onClose }: Props) {
  return <Modal isOpen={isOpen} onClose={onClose} title="Accepted File Types" body={acceptedFilesTypes.join(', ')} />;
}

export default AcceptedFileTypesModal;

//import PetMap from "./PetMap";
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';
import {Modal} from 'flowbite-react';
import CardPostPet from './CardPostPet';

const PetDescription = ({name, description, imageUrl, imageUser, postData}) => {
  const {t} = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="container mx-auto">
          <CardPostPet
            name={name}
            description={description}
            imageUrl={imageUrl}
            imageUser={imageUser}
            t={t}
            handleModalToggle={handleModalToggle}
            post={postData}
          />
      </div>

      <Modal show={isModalOpen} onClose={handleModalToggle}>
        <Modal.Header className='bg-[#ff797d] flex items-center justify-center '>
          <p className='text-white'>Compartir</p>
        </Modal.Header>
        <Modal.Body className='bg-[#ff797d]'>
          <div className="grid grid-cols-3 gap-4">
            <img src="/src/assets/img/Icons/Facebook.svg" alt="Facebook" className="w-10 h-10"/>
            <img src="/src/assets/img/Icons/Instagram.svg" alt="Instagram" className="w-10 h-10"/>
            <img src="/src/assets/img/Icons/WhatsApp.svg" alt="WhatsApp" className="w-10 h-10"/>
            <img src="/src/assets/img/Icons/TwitterX.svg" alt="TwitterX" className="w-10 h-10"/>
            <img src="/src/assets/img/Icons/link.svg" alt="Link" className="w-10 h-10"/>
            <img src="/src/assets/img/Icons/code.svg" alt="Code" className="w-10 h-10"/>

          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

PetDescription.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imageUser: PropTypes.string,
  postData: PropTypes.object,
};

export default PetDescription;

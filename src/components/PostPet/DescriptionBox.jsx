import { usePetData } from '../../hooks/usePetData';
import { useTranslation } from "react-i18next";

const DescriptionBox = () => {
  const { petData, setPetData } = usePetData();
  const { t } = useTranslation();

  const handleDescriptionChange = (e) => {
    setPetData({
      ...petData,
      description: e.target.value,
    });
  };

  return (

      <div className="mb-4">
      <h3 className="mb-3 text-[#FF4146] font-medium">{t("descriptionPet")}</h3>
      <textarea
        className="w-full p-2 border-2 border-[#FFB0A9] rounded-lg"
        maxLength="320"
        rows="4"
        value={petData.description}
        onChange={handleDescriptionChange}
      ></textarea>
      <p className="text-right  text-sm text-[#FFB0A9]">{petData.description.length || 0}/320</p>
      </div>
  );
};

export default DescriptionBox;

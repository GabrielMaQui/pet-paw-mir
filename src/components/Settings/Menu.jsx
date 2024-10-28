// src/presentation/components/Navbar.js
import { useContext } from 'react';
import { ConfigContext } from '../../contexts/config/ConfigContext';
import { useTranslation } from 'react-i18next';
import { useUser } from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const { t } = useTranslation();
  const { logout } = useUser();
  const { setSelectedSection } = useContext(ConfigContext);
  const navigate = useNavigate();
  const sections = [
    { name: 'settings.user.title', options: ['settings.user.edit', 'settings.user.password', 'settings.user.details','settings.manage.deleteAccount'] },
    { name: 'settings.security.title', options: ['settings.security.privacy', 'settings.security.blockedAccounts'] },
    { name: 'settings.preferences.title', options: ['settings.preferences.theme', 'settings.preferences.language'] },
    { name: 'settings.support.title', options: ['settings.support.reportProblem', 'settings.support.faqs'] },
    { name: 'settings.manage.title', options: ['settings.manage.logout' ] },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  }

  return (
    <nav className="hidden md:block w-64 m-auto border-r-custom-200 md:border-r-2 h-[calc(100vh+70px)]">
      {sections.map(section => (
        <div key={section.name} >
          <h3 className="text-lg ml-4 mr-4 font-semibold mb-2 text-custom-250">{t(section.name)}</h3>
          <ul>
            {section.options.map(option => (
              <li
                key={option}
                className="cursor-pointer p-2 hover:bg-gray-200 text-custom-250 ml-4 mr-4"
                onClick={() => option === 'settings.manage.logout'
                  ? handleLogout() // Maneja la opción de logout
                  : setSelectedSection(option)}
              >
                {t(option)}
              </li>
            ))}
          </ul>
          {section.name !== 'settings.manage.title'? <hr className="h-px bg-custom-200 border-0 dark:bg-gray-700 ml-0 mb-1 mt-1"/> : null}

        </div>
      ))}
    </nav>
  );
};

export default Menu;

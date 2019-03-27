import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Acceuil',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Demende de compte',
    icon: 'nb-home',
    link: '/pages/tables/compte-table',
  },
  {
    title: 'Déposer projet',
    icon: 'nb-plus-circled',
    link: '/pages/tables/user-table',
  },
  {
    title: 'Mes projets',
    icon: 'nb-loop-circled',
    link: '/pages/tables/projet-table',
  },
  {
    title: 'Gérer utulisateur',
    icon: 'nb-person',
    link: '/pages/tables/user-table',
  },
  {
    title: 'Gestionutulisateur',
    icon: 'nb-person',
    link: '/pages/Gestionutulisateur',
    home: true,
  },
  {
    title: 'Messagerie',
    icon: 'nb-email',
    link: '/pages/Gestionutulisateur',
    home: true,
  },
  {
    title: 'Profil',
    icon: 'nb-email',
    link: '/pages/profil',
    //home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/pages/connexion/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
export const isDev: NbMenuItem[] = [
  {
    title: 'Acceuil',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },

  {
    title: 'Déposer projet',
    icon: 'nb-plus-circled',
    link: '/pages/tables/user-table',
  },
  {
    title: 'Mes projets',
    icon: 'nb-loop-circled',
    link: '/pages/tables/projet-table',
  },
 
  {
    title: 'Messagerie',
    icon: 'nb-email',
    link: '/pages/Gestionutulisateur',
    home: true,
  },
  {
    title: 'Profil',
    icon: 'nb-email',
    link: '/pages/profil',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/pages/connexion/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
export const firstauth: NbMenuItem[] = [
  {
    title: 'Profil',
    icon: 'nb-email',
    link: '/pages/Confprofil',
    home: false,
  },

  
];

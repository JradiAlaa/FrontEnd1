import { NbMenuItem } from '@nebular/theme';

function  isAdmin() : boolean {  
  console.log("++++++++++++++11", sessionStorage.getItem("role")) ;
 // console.log("testtt token get", token.getPayload['role'])
 // var tokenPayload = token.getPayload['role'] ;
 if ( sessionStorage.getItem("role")=="admin") return false 
 else return true 
}
function  ischef() : boolean {
  console.log("++++++++++++++11", sessionStorage.getItem("role"))
 if ( sessionStorage.getItem("role")=="chef") return false 
 else return true 
}
function  isclient() : boolean {
  console.log("++++++++++++++11", sessionStorage.getItem("role"))
 if ( sessionStorage.getItem("role")=="client") return false 
 else return true 
}
function  isdev() : boolean {
  console.log("++++++++++++++11", sessionStorage.getItem("role"))
 if ( sessionStorage.getItem("role")=="dev") return false 
 else return true 
}
export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Acceuil',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Modal',
    icon: 'nb-home',
    link: '/pages/modal',
    home: true,
  },
  {
    title: 'Ajouter projet',
    icon: 'nb-plus-circled',
    link: '/pages/ajoutProjet', 
    selected : true , 
    hidden: (isAdmin() && isclient() )
  },
  
  {
    title: 'Deposer projet',
    icon: 'nb-plus-circled',
    link: '/pages/tables/projet-table',
    selected : true , 
    hidden: (isAdmin() && isclient())
  },
  
   {
    title: 'Liste de demande projet',
    icon: 'nb-list',
    link: '/pages/tables/list-projet-table',
    hidden: (isAdmin() && isclient() && ischef())
  },
   {
    title: 'Mes Projets',
    icon: 'nb-compose',
    link: '',
    hidden: (isdev()&&ischef())
  },
   {
    title: 'Mes taches',
    icon: 'nb-grid-b-outline',
    link: '',
    hidden: (isdev()&&ischef())
  },
   {
    title: 'Suivre projet ',
    icon: 'nb-loop-circled',
    link: '',
    hidden: (isAdmin() && isclient())
  },
   {
    title: 'Time Tracking ',
    icon: 'nb-bar-chart',
    link: '/pages/calendar',
    hidden: (isAdmin()&&isdev()&&ischef())
  },
   {
    title: 'Boite de message',
    icon: 'nb-email',
    link: '/pages/messagerie',
    
  },
   {
    title: 'Demande de compte client',
    icon: 'nb-checkmark-circle',
    link: '/pages/tables/compte-table',
    hidden: isAdmin()
  },
   {
    title: 'creer compte Dev chef ',
    icon: 'nb-plus',
    link: '/pages/tables/user-table',
    hidden: isAdmin()
  },
  {
    title: 'Mon Profil',
    icon: 'nb-person',
    link: '/pages/profil',
 
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
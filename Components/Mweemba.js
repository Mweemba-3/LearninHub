import React from 'react';
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import Mulungushi from './Mulungushi';
import InstituitionsScreen from './InstituitionsScreen';
import CBU from './CBU';
import CavendishUniversity from './Cavendish University';
import ChalimbanaUniversity from './Chalimbana University';
import EdenUniversity from './Eden University';
import KwameKhurumahUniversity from './KwameKhurumahUniversity';
import LMMU from './LMMU';
import UNZA from './UNZA';
import SNAS from './SNAS'
import SchoolofBusiness from './School of Bussines';
import SchoolofAgric from './School of Agriculture';
import SchoolofEducation from './School of Education';
import SchoolofHealth from './School of Health';
import SchoolofTechnology from './School of Technology';
import SchoolofSocialSciences  from './School of Social Sciences'
import Bio111 from './Bio-111';
import Chem111 from './Chem-111';
import Chem112 from './Chem-112';
import MSM111 from './MSM-111';
import PHY101 from './PHY-101';
import SnasSem from './SnasSem';
import SNAS2 from './SNAS2';
import CloudinaryDownloader  from './Phy101lcs';
import CloudinaryDownloader2 from './Phy101tutorials';
import CloudinaryDownloader3 from './Phy101etq';
import CloudinaryDownloader4 from './Phy101rb';
import CloudinaryDownloader5 from './Msm111lc';
import CloudinaryDownloader6 from './Msm111tts';
import CloudinaryDownloader7 from './Msm111etq';
import CloudinaryDownloader8 from './Msm111rb';
import CloudinaryDownloader9 from './Chem111lcs';
import CloudinaryDownloader10 from './Chem111tts';
import CloudinaryDownloader11 from './Chem111etq';
import CloudinaryDownloader12 from './Chem111rb';
import CloudinaryDownloader13 from './Bio111lcs'
import CloudinaryDownloader14 from './Bio111tts';
import CloudinaryDownloader15 from './Bio111etq';
import CloudinaryDownloader16 from './Bio111rb';
import Bio112 from './Bio-112';
import CloudinaryDownloader17 from './Bio112lcs';
import CloudinaryDownloader18 from './Bio112tts';
import CloudinaryDownloader19 from './Bio112etq';
import CloudinaryDownloader20 from './Bio112rb';
import MSM112 from './MSM-112';
import CloudinaryDownloader21 from './Chem112lcs';
import CloudinaryDownloader22 from './Chem112tts';
import CloudinaryDownloader23 from './Chem112etq';
import CloudinaryDownloader24 from './Chem112rb';
import PHY102 from './Phy-102';
import CloudinaryDownloader25 from './Phy102lcs';
import CloudinaryDownloader26 from './Phy102tts';
import CloudinaryDownloader27 from './Phy102etq';
import CloudinaryDownloader28 from './Phy102rb';
import Lawyears from './Law-Years';

import CloudinaryDownloader29 from './Msm112lcs';
import CloudinaryDownloader30 from './Msm112tts';
import CloudinaryDownloader31 from './Msm112etq';
import CloudinaryDownloader32 from './Msm112rb';
import Journalismyears from './Journalismyears';
import Journalism1styr from './Journalism1styr';
import Journalism3rdyr from './Journalism3rdyr';
import Journalism4thyr from './Journalism4thyr';
import Journalism2ndyrsem from './Journalism2ndyrsem';
import JSecondyearsem1 from './JSecondyearsem1';
import JSecondyearsem2 from './JSecondyearsem2';

import BsAdminandmarksem from './BsAdmin&marksem';
import BsAdminandmarksem1 from './BsAdminandmarksem1';
import BsAdminandmarksem2 from './BsAdminandmarksem2';
import BengCivilyears from './BengCivilyears';
import Beng2Civilsem from './Beng2Civilsem';
import Beng2Civilsem1 from './Beng2Civilsem1';
import BengEEEyears from './BengEEEyears';
import Beng2Civilsem2 from './Beng2Civilsem2';

import Beng2EEEsem from './Beng2EEEsem';
import Beng2EEEsem1 from './Beng2EEEsem1';
import Beng2EEEsem2 from './Beng2EEEsem2';
import BengMechyears from './BengMechyears';
import Beng2Mechsem from './Beng2Mechsem';
import Beng2Mechsem1 from './Beng2Mechsem1';
import Beng2Mechsem2 from './Beng2Mechsem2';
import BengAgricyears from './BengAgricyears';
import Beng2Agricsem from './Beng2Agricsem';
import Beng2Agricsem1 from './Beng2Agricsem1';
import Beng2Agricsem2 from './Beng2Agricsem2';

import Computeryears from './Computeryears';
import Computer2sem from './Computer2sem';
import Computer2sem1 from './Computer2sem1';
import Computer2sem2 from './Computer2sem2';
import ITyears from './ITyears';
import IT2sem from './IT2sem';
import IT2sem1 from './IT2sem1';
import IT2sem2 from './IT2sem2';
import ITComputerArch from './ITComputerArch';
import ITBMG from './ITBMG';
import ITJava1 from './ITJava1';
import ITDD from './ITDD';
import ITStatistics from './ITStatistics';
import ITAlgorithms from './ITAlgorithms';
import ITIntjava from './ITIntjava';
import ITDatabase from './ITDatabase';
import ITNetworking from './ITNetworking';

import BsAdminmarketyears from './BsAdminmarketyears';
import ComputerArch from './ComputerArch';
import DD from './DigitalD';

import Descrete from './DigitalD';
import Java1 from './Java1';
import Statistics from './Statistics';

import Algorithms from './Algorithms';
import Database from './Database';
import Networking from './Networking';
import Operating from './Operating';
import ITOperating from './ITOperating';
import Bskills from './Bskills';
import Mediaidentity from './Mediaidentity';
import MediainZ from './MediainZ';
import Mediarelations from './Mediarelations';
import Spa from './Spa';
import Accounting from './Accounting';
import Businesslaw from './Businesslaw';
import Economics from './Economics';
import Intmacro from './Intmacro';
import Principlesofmark from './Principlesofmark';
import StatisticsAdming from './StatisticsAdming';
import Civilstatics from './Civilstatics';
import Civilelectronics from './Civilelectronics';
import Civilmathermatics from './Civilmathermatics';
import Civilmaterials from './Civilmaterials';
import CivilDrawing from './CivilDrawing';
import EEEDrawing from './EEEDrawing';
import EEEmaterials from './EEEmaterials';
import EEEmathermatics from './EEEmathermatics';
import EEEstatics from './EEEstatics';
import EEEelectronics from './EEEelectronics';
import MechDrawing from './MechDrawing';
import Mechmaterials from './Mechmaterials';
import Mechmathermatics from './Mechmathermatics';
import Mechelectronics from './Mechelectronics';
import Mechstatics from './Mechstatics';
import AgricDrawing from './AgricDrawing';
import Agricmaterials from './Agricmaterials';
import Agricmathermatics from './Agricmathermatics';
import Agricelectronics from './Agricelectronics';
import Agricstatics from './Agricstatics';
import CloudinaryDownloader33 from './AgricstaticsLect';
import CloudinaryDownloader34 from './Agricstaticstest';
import CloudinaryDownloader35 from './Agricmathlect';
import CloudinaryDownloader36 from './Agricmathprac';
import CloudinaryDownloader37 from './AgricmaterialsLec';
import CloudinaryDownloader38 from './Agricmaterialstest';
import CloudinaryDownloader39 from './Agricelectlec';
import CloudinaryDownloader40 from './Agricelecttest';
import CloudinaryDownloader41 from './Agricdrawinglect';
import CloudinaryDownloader42 from './Agricdrawingtest';
import CloudinaryDownloader43 from './MechDrawinglect';
import CloudinaryDownloader44 from './MechDrawingtest';
import CloudinaryDownloader45 from './EEEDrawinglect';
import CloudinaryDownloader46 from './EEEDrawingtest';
import CloudinaryDownloader47 from './CivilDrawinglect';
import CloudinaryDownloader48 from './CivilDrawingtest';
import CloudinaryDownloader49 from './Civilelectronicslect';
import CloudinaryDownloader50 from './Civilelectronicstest';
import CloudinaryDownloader51 from './EEEelectronicslect';
import CloudinaryDownloader52 from './EEEelectronicstest';
import CloudinaryDownloader53 from './Mechelectronicslect';
import CloudinaryDownloader54 from './Mechelectronicstest';
import CloudinaryDownloader55 from './Civilmaterialslect';
import CloudinaryDownloader56 from './Civilmaterialstest';
import CloudinaryDownloader57 from './EEEmaterialstest';
import CloudinaryDownloader58 from './EEEmaterialslect';
import CloudinaryDownloader59 from './Mechmaterialslect';
import CloudinaryDownloader60 from './Mechmaterialstest';
import CloudinaryDownloader61 from './Civilmathermaticslect';
import CloudinaryDownloader62 from './Civilmathermaticstest';
import CloudinaryDownloader63 from './EEEmathermaticslect';
import CloudinaryDownloader64 from './EEEmathermaticstest';
import CloudinaryDownloader65 from './Mechmathermaticslect';
import CloudinaryDownloader66 from './Mechmathermaticstest';
import CloudinaryDownloader67 from './Civilstaticslect';
import CloudinaryDownloader68 from './Civilstaticstest';
import CloudinaryDownloader69 from './EEEstaticslect';
import CloudinaryDownloader70 from './EEEstaticstest';
import CloudinaryDownloader71 from './Mechstaticstest';
import CloudinaryDownloader72 from './Mechstaticslect';
import CloudinaryDownloader73 from './Accountinglect';
import CloudinaryDownloader74 from './Accountingtes';
import CloudinaryDownloader75 from './Businesslawlect';
import CloudinaryDownloader76 from './Businesslawtest';
import CloudinaryDownloader77 from './Economicstest';
import CloudinaryDownloader78 from './Economicslect';
import CloudinaryDownloader79 from './Intmacrolect';
import CloudinaryDownloader80 from './Intmacrotest';
import CloudinaryDownloader81 from './Principlesofmarklect';
import CloudinaryDownloader82 from './Principlesofmarktest';
import CloudinaryDownloader83 from './StatisticsAdminglect';
import CloudinaryDownloader84 from './StatisticsAdmingtest';
import CloudinaryDownloader85 from './Bskillslect';
import CloudinaryDownloader86 from './Bskillstest';
import CloudinaryDownloader87 from './Medaidentitylect';
import CloudinaryDownloader88 from './Medaidentitytest';
import CloudinaryDownloader89 from './MediainZlect';
import CloudinaryDownloader90 from './MediainZtest';
import CloudinaryDownloader91 from './Mediarelationslect';
import CloudinaryDownloader92 from './Mediarelationstest';
import CloudinaryDownloader93 from './Spalect';
import CloudinaryDownloader94 from './Spatest';
import CloudinaryDownloader95 from './ITBMGlect';
import CloudinaryDownloader96 from './ITBMGtest';
import CloudinaryDownloader97 from './ITComputerArchlect';
import CloudinaryDownloader98 from './ITComputerArchtest';
import CloudinaryDownloader99 from './ITDatabaselect';
import CloudinaryDownloader100 from './ITDatabasetest';
import CloudinaryDownloader101 from './ITDDlect';
import CloudinaryDownloader102 from './ITDDtest';
import CloudinaryDownloader103 from './ITIntjavalect';
import CloudinaryDownloader104 from './ITIntjavatest';
import CloudinaryDownloader105 from './ITJava1lect';
import CloudinaryDownloader106 from './ITJava1test';
import CloudinaryDownloader107 from './ITNetworkinglect';
import CloudinaryDownloader108 from './ITNetworkingtest';
import CloudinaryDownloader109 from './ITOperatinglect';
import CloudinaryDownloader110 from './ITOperatingtest';
import CloudinaryDownloader111 from './ITStatisticslect';
import CloudinaryDownloader112 from './ITStatisticstest';
import Intjava from './Intjava';
import CloudinaryDownloader113 from './ITAlgorithmslect';
import CloudinaryDownloader114 from './ITAlgorithmstest';
import CloudinaryDownloader115 from './Algorithmslect';
import CloudinaryDownloader116 from './Algorithmstest';
import CloudinaryDownloader117 from './Intjavalect';
import CloudinaryDownloader118 from './Intjavatest';
import CloudinaryDownloader119 from './Databaselect';
import CloudinaryDownloader120 from './Databasetest';
import CloudinaryDownloader121 from './Networkinglect';
import CloudinaryDownloader122 from './Networkingtest';
import CloudinaryDownloader123 from './Operatinglect';
import CloudinaryDownloader124 from './Operatingtest';
import CloudinaryDownloader125 from './ComputerArchlect';
import CloudinaryDownloader126 from './ComputerArchtest';
import CloudinaryDownloader127 from './DDlect';
import CloudinaryDownloader128 from './DDtest';
import CloudinaryDownloader129 from './Descretelect';
import CloudinaryDownloader130 from './Descretetest';
import DigitalD from './DigitalD';
import CSDescrete from './Descrete';
import CloudinaryDownloader131 from './Java1lect';
import CloudinaryDownloader132 from './Java1test';
import CloudinaryDownloader133 from './Statisticslects';
import CloudinaryDownloader134 from './Statisticstest';
  
const Stack=createNativeStackNavigator();

export default function Mweemba() {
  return(
        <Stack.Navigator>
          <Stack.Screen name="My Universities" component={InstituitionsScreen} options={{headershown:false}} />
          <Stack.Screen name="Mulungushi" component={Mulungushi} options={{title:"Mulungushi University"}} />
          <Stack.Screen name="CBU" component={CBU} options={{title:"Copperbelt University"}} />
          <Stack.Screen name="Cavendish University" component={CavendishUniversity} options={{title:"Cavendish University"}} />
          <Stack.Screen name="Chalimbana University" component={ChalimbanaUniversity} options={{title:"Chalimbana University"}} />
          <Stack.Screen name="Eden University" component={EdenUniversity} options={{title:"Eden University"}} />
          <Stack.Screen name="Kwame" component={KwameKhurumahUniversity} options={{title:"Kwame Khurumah University"}} />
          <Stack.Screen name="LMMU" component={LMMU} options={{title:"Levy Mwanawasa Medical University"}} />
          <Stack.Screen name="UNZA" component={UNZA} options={{title:"University of Zambia"}} />
          <Stack.Screen name="SNAS" component={SNAS} options={{title:"SNAS"}} />
          <Stack.Screen name="school of business" component={SchoolofBusiness} options={{title:"School of Business"}} />
          <Stack.Screen name="school of agriculture" component={SchoolofAgric} options={{title:"School of Agriculture"}} />
          <Stack.Screen name="school of education" component={SchoolofEducation} options={{title:"School of Education"}} />
          <Stack.Screen name="school of health" component={SchoolofHealth} options={{title:"School of Health"}} />
          <Stack.Screen name="school of technology" component={SchoolofTechnology} options={{title:"School of Engineering & Technology"}} />
          <Stack.Screen name="school of social" component={SchoolofSocialSciences} options={{title:"School of Social Sciences"}} />
          <Stack.Screen name="bio111" component={Bio111} options={{title:"Bio-111"}} />
          <Stack.Screen name="chem111" component={Chem111} options={{title:"Chem-111"}} />
          <Stack.Screen name="msm111" component={MSM111} options={{title:"MSM-111"}} />
          <Stack.Screen name="phy101" component={PHY101} options={{title:"PHY-101"}} />
          <Stack.Screen name="SnasSem" component={SnasSem} options={{title:"SNAS SEMESTERS"}} />
          <Stack.Screen name="snas2" component={SNAS2} options={{title:"SNAS SEMESTER 2"}} />
          <Stack.Screen name="bio112" component={Bio112} options={{title:"Bio-112"}} />
          <Stack.Screen name="msm112" component={MSM112} options={{title:"MSM-112"}} />
          <Stack.Screen name="chem112" component={Chem112} options={{title:"Chem-112"}} />
          <Stack.Screen name="phy102" component={PHY102} options={{title:"Phy-102"}} />
          <Stack.Screen name="Lawyears" component={Lawyears} options={{title:"BCH Law"}} />

          {/* Computer Science */}
          <Stack.Screen name="Computeryears" component={Computeryears} options={{title:"Computer Science"}} />
          <Stack.Screen name="Computer2sem" component={Computer2sem} options={{title:"Computer Science"}} />
          <Stack.Screen name="Computer2sem1" component={Computer2sem1} options={{title:"Semester One"}} />
          <Stack.Screen name="ComputerArch" component={ComputerArch} options={{title:"Computer Architecture"}} />
          <Stack.Screen name="Descrete" component={CSDescrete} options={{title:"Descrete Mathermatics"}} />
          <Stack.Screen name="DigitalD" component={DigitalD} options={{title:"Digital Design"}} />
          <Stack.Screen name="Java1" component={Java1} options={{title:"OOP and Java"}} />
          <Stack.Screen name="Statistics" component={Statistics} options={{title:"Statistics"}} />
          <Stack.Screen name="Computer2sem2" component={Computer2sem2} options={{title:"Semester Two"}} />
          <Stack.Screen name="Algorithms" component={Algorithms} options={{title:"Data Structures and Algorithms"}} />
          <Stack.Screen name="Intjava" component={Intjava} options={{title:"Intermediate Java Programming"}} />
          <Stack.Screen name="Database" component={Database} options={{title:"Database"}} />
          <Stack.Screen name="Networking" component={Networking} options={{title:"Networking and Communication"}} />
          <Stack.Screen name="Operating" component={Operating} options={{title:"Operating Systems"}} />

          {/* IT */}
          <Stack.Screen name="ITyears" component={ITyears} options={{title:"Information Technology"}} />
          <Stack.Screen name="IT2sem" component={IT2sem} options={{title:"Information Technology"}} />
          <Stack.Screen name="IT2sem1" component={IT2sem1} options={{title:"Semester One"}} />
          <Stack.Screen name="ITComputerArch" component={ITComputerArch} options={{title:"Computer Architecture"}} />
          <Stack.Screen name="ITDD" component={ITDD} options={{title:"Digital Design"}} />
          <Stack.Screen name="ITBMG" component={ITBMG} options={{title:"BMG"}} />
          <Stack.Screen name="ITJava1" component={ITJava1} options={{title:"OOP and Java"}} />
          <Stack.Screen name="ITStatistics" component={ITStatistics} options={{title:"Statistics"}} />
          <Stack.Screen name="IT2sem2" component={IT2sem2} options={{title:"Semester Two"}} />
          <Stack.Screen name="ITAlgorithms" component={ITAlgorithms} options={{title:"Data Structures and Algorithms"}} />
          <Stack.Screen name="ITIntjava" component={ITIntjava} options={{title:"Intermediate Java Programming"}} />
          <Stack.Screen name="ITDatabase" component={ITDatabase} options={{title:"Database"}} />
          <Stack.Screen name="ITNetworking" component={ITNetworking} options={{title:"Networking and Communication"}} />
          <Stack.Screen name="ITOperating" component={ITOperating} options={{title:"Operating Systems"}} />

           {/* Journalism */}
          <Stack.Screen name="Journalismyears" component={Journalismyears} options={{title:"Public Relations & Journalism"}} />
          <Stack.Screen name="Firstyear" component={Journalism1styr} options={{title:"First Year"}} />
          <Stack.Screen name="Journalism2ndyrsem" component={Journalism2ndyrsem} options={{title:"Second Year"}} />
          <Stack.Screen name="JSecondyearsem1" component={JSecondyearsem1} options={{title:"Semester 1"}} />
          <Stack.Screen name="JSecondyearsem2" component={JSecondyearsem2} options={{title:"Semester 2"}} />
          <Stack.Screen name="Bskills" component={Bskills} options={{title:"Broadcasting Skills"}} />
          <Stack.Screen name="Mediaidentity" component={Mediaidentity} options={{title:"Media and Identity"}} />
          <Stack.Screen name="MediainZ" component={MediainZ} options={{title:"Media in Zambia"}} />
          <Stack.Screen name="Mediarelations" component={Mediarelations} options={{title:"Media Relations"}} />
          <Stack.Screen name="Spa" component={Spa} options={{title:"SPA 212"}} />
          <Stack.Screen name="Thirdyear" component={Journalism3rdyr} options={{title:"Third Year"}} />
          <Stack.Screen name="Fourthyear" component={Journalism4thyr} options={{title:"Fourth Year"}} />

          {/* Business aministration and marketing */}
          <Stack.Screen name="BsAdminmarketyears" component={BsAdminmarketyears} options={{title:"Business Admin and Marketing"}} />
          <Stack.Screen name="BsAdmin&marksem" component={BsAdminandmarksem} options={{title:"Business Admin and Marketing"}} />
          <Stack.Screen name="BsAdminandmarksem1" component={BsAdminandmarksem1} options={{title:"Semester One"}} />
          <Stack.Screen name="BsAdminandmarksem2" component={BsAdminandmarksem2} options={{title:"Semester Two"}} />
          <Stack.Screen name="Accounting" component={Accounting} options={{title:"Accounting"}} />
          <Stack.Screen name="Businesslaw" component={Businesslaw} options={{title:"Business Law"}} />
          <Stack.Screen name="Economics" component={Economics} options={{title:"Economics"}} />
          <Stack.Screen name="Intmacro" component={Intmacro} options={{title:"Intermediate macroeconomics"}} />
          <Stack.Screen name="Principlesofmark" component={Principlesofmark} options={{title:"Principles of Marketing"}} />
          <Stack.Screen name="StatisticsAdming" component={StatisticsAdming} options={{title:"Statistics"}} />

          {/* BENG civil */}
          <Stack.Screen name="BengCivilyears" component={BengCivilyears} options={{title:"BEng Civil Eng"}} />
          <Stack.Screen name="Beng2Civilsem" component={Beng2Civilsem} options={{title:"BEng Civil Eng"}} />
          <Stack.Screen name="Beng2Civilsem1" component={Beng2Civilsem1} options={{title:"Semester One"}} />
          <Stack.Screen name="CivilDrawing" component={CivilDrawing} options={{title:"Drawing"}} />
          <Stack.Screen name="Civilmaterials" component={Civilmaterials} options={{title:"Materials"}} />
          <Stack.Screen name="Civilmathermatics" component={Civilmathermatics} options={{title:"Mathermatics"}} />
          <Stack.Screen name="Civilelectronics" component={Civilelectronics} options={{title:"Electronics"}} />
          <Stack.Screen name="Civilstatics" component={Civilstatics} options={{title:"Statics"}} />
          <Stack.Screen name="Beng2Civilsem2" component={Beng2Civilsem2} options={{title:"Semester Two"}} />

          {/* BENG EEE */}
          <Stack.Screen name="BengEEEyears" component={BengEEEyears} options={{title:"BEng EEE Eng"}} />
          <Stack.Screen name="Beng2EEEsem" component={Beng2EEEsem} options={{title:"BEng EEE Eng"}} />
          <Stack.Screen name="Beng2EEEsem1" component={Beng2EEEsem1} options={{title:"Semester One"}} />
          <Stack.Screen name="EEEDrawing" component={EEEDrawing} options={{title:"Drawing"}} />
          <Stack.Screen name="EEEmaterials" component={EEEmaterials} options={{title:"Materials"}} />
          <Stack.Screen name="EEEmathermatics" component={EEEmathermatics} options={{title:"Mathermatics"}} />
          <Stack.Screen name="EEEelectronics" component={EEEelectronics} options={{title:"Electronics"}} />
          <Stack.Screen name="EEEstatics" component={EEEstatics} options={{title:"Statics"}} />
          <Stack.Screen name="Beng2EEEsem2" component={Beng2EEEsem2} options={{title:"Semester Two"}} />

          {/* BENG Mech */}
          <Stack.Screen name="BengMechyears" component={BengMechyears} options={{title:"BEng Mechanical Eng"}} />
          <Stack.Screen name="Beng2Mechsem" component={Beng2Mechsem} options={{title:"BEng Mechanical Eng"}} />
          <Stack.Screen name="Beng2Mechsem1" component={Beng2Mechsem1} options={{title:"Semester One"}} />
          <Stack.Screen name="MechDrawing" component={MechDrawing} options={{title:"Drawing"}} />
          <Stack.Screen name="Mechmaterials" component={Mechmaterials} options={{title:"Materials"}} />
          <Stack.Screen name="Mechmathermatics" component={Mechmathermatics} options={{title:"Mathermatics"}} />
          <Stack.Screen name="Mechelectronics" component={Mechelectronics} options={{title:"Electronics"}} />
          <Stack.Screen name="Mechstatics" component={Mechstatics} options={{title:"Statics"}} />
          <Stack.Screen name="Beng2Mechsem2" component={Beng2Mechsem2} options={{title:"Semester Two"}} />

          {/* BENG Agric*/}
          <Stack.Screen name="BengAgricyears" component={BengAgricyears} options={{title:"BEng Agricutural Eng"}} />
          <Stack.Screen name="Beng2Agricsem" component={Beng2Agricsem} options={{title:"BEng Agricutural Eng"}} />
          <Stack.Screen name="Beng2Agricsem1" component={Beng2Agricsem1} options={{title:"Semester One"}} />
          <Stack.Screen name="AgricDrawing" component={AgricDrawing} options={{title:"Drawing"}} />
          <Stack.Screen name="Agricmaterials" component={Agricmaterials} options={{title:"Materials"}} />
          <Stack.Screen name="Agricmathermatics" component={Agricmathermatics} options={{title:"Mathermatics"}} />
          <Stack.Screen name="Agricelectronics" component={Agricelectronics} options={{title:"Electronics"}} />
          <Stack.Screen name="Agricstatics" component={Agricstatics} options={{title:"Statics"}} />
          <Stack.Screen name="Beng2Agricsem2" component={Beng2Agricsem2} options={{title:"Semester Two"}} />

          {/*  My Uploaders  */}
          
          <Stack.Screen name="phy101lcs" options={{title:"Lecture Slide"}} 
            children={() =>
            <CloudinaryDownloader contextId={"phy101lectureslide"}/>}
          />
          <Stack.Screen name="phy101tt" options={{title:"Tutorial Sheets"}} 
            children={() =>
            <CloudinaryDownloader2 contextId={"phy101tutorialsheets"}/>}
          />
          <Stack.Screen name="phy101etq" options={{title:"Exams, Tests and Quizzes"}} 
            children={() =>
            <CloudinaryDownloader3 contextId={"phy101examstestsandquizzes"}/>}
          />
          <Stack.Screen name="phy101rb" options={{title:"Prescribed Books"}} 
            children={() =>
            <CloudinaryDownloader4 contextId={"phy101reccommendedbooks"}/>}
          />
          <Stack.Screen name="msm111lcs" options={{title:"Lecture Slides"}} 
            children={() =>
            <CloudinaryDownloader5 contextId={"msm111lectures"}/>}
          />
          <Stack.Screen name="msm111tts" options={{title:"Tutorial Sheets"}} 
            children={() =>
            <CloudinaryDownloader6 contextId={"msm111tutorialsheets"}/>}
          />
          <Stack.Screen name="msm111etq" options={{title:"Exams, Quizzes and Test's"}} 
            children={() =>
            <CloudinaryDownloader7 contextId={"msm111examsquizzesandtest"}/>}
          />
          <Stack.Screen name="msm111rb" options={{title:"Prescribed Books"}} 
            children={() =>
            <CloudinaryDownloader8 contextId={"msm111recommendedbooks"}/>}
          />
          
          <Stack.Screen name="chem111lcs" options={{title:"Lecture Slides"}} 
            children={() =>
            <CloudinaryDownloader9 contextId={"chem111lectureslides"}/>}
          />
          <Stack.Screen name="chem111tts" options={{title:"Tutorial Sheets"}} 
            children={() =>
            <CloudinaryDownloader10 contextId={"chem111tutorialsheets"}/>}
          />
          <Stack.Screen name="chem111etq" options={{title:"Exams, Test's and Quizzes"}} 
            children={() =>
            <CloudinaryDownloader11 contextId={"chem111examsquizzesandtest"}/>}
          />
          <Stack.Screen name="chem111rb" options={{title:"Prescribed Books"}} 
            children={() =>
            <CloudinaryDownloader12 contextId={"chem111prescribedbooks"}/>}
          />
          <Stack.Screen name="bio111lcs" options={{title:"Lecture Slides"}} 
            children={() =>
            <CloudinaryDownloader13 contextId={"bio111lectureslide"}/>}
          />
          <Stack.Screen name="bio111tts" options={{title:"Tutorial Sheets"}} 
            children={() =>
            <CloudinaryDownloader14 contextId={"bio111Tutorialsheets"}/>}
          />
          <Stack.Screen name="bio111etq" options={{title:"Exams, Test's and Quizzes"}} 
            children={() =>
            <CloudinaryDownloader15 contextId={"bio111examstestandquizzes"}/>}
          />
          <Stack.Screen name="bio111rb" options={{title:"Prescribed Books"}} 
            children={() =>
            <CloudinaryDownloader16 contextId={"bio111prescribedbooks"}/>}
          />
          <Stack.Screen name="bio112lcs" options={{title:"Lecture Slides"}} 
            children={() =>
            <CloudinaryDownloader17 contextId={"bio112Lectureslides"}/>}
          />
          <Stack.Screen name="bio112tts" options={{title:"Tutorial Sheets"}} 
            children={() =>
            <CloudinaryDownloader18 contextId={"bio112tutorialsheets"}/>}
          />
          <Stack.Screen name="bio112etq" options={{title:"Exams, Test's and Quizzes"}} 
            children={() =>
            <CloudinaryDownloader19 contextId={"bio112examstestansquizzes"}/>}
          />
          <Stack.Screen name="bio112rb" options={{title:"Prescribed Books"}} 
            children={() =>
            <CloudinaryDownloader20 contextId={"bio112recommendedbooks"}/>}
          />
          <Stack.Screen name="chem112lcs" options={{title:"Lecture Slides"}} 
            children={() =>
            <CloudinaryDownloader21 contextId={"chem112leectureslides"}/>}
          />
          <Stack.Screen name="chem112tts" options={{title:"Tutorial Sheets"}} 
            children={() =>
            <CloudinaryDownloader22 contextId={"chem112tutorialshets"}/>}
          />
          <Stack.Screen name="chem112etq" options={{title:"Exams, Test's and Quizzes"}} 
            children={() =>
            <CloudinaryDownloader23 contextId={"chem112examstestandquizzes"}/>}
          />
          <Stack.Screen name="chem112rb" options={{title:"Prescribed Books"}} 
            children={() =>
            <CloudinaryDownloader24 contextId={"chem112recommendedbppks"}/>}
          />
          <Stack.Screen name="phy102lcs" options={{title:"Lecture Slides"}} 
            children={() =>
            <CloudinaryDownloader25 contextId={"phy102lectureslides"}/>}
          />
          <Stack.Screen name="phy102tts" options={{title:"Tutorial Sheets"}} 
            children={() =>
            <CloudinaryDownloader26 contextId={"phy102tutorialshhets"}/>}
          />
          <Stack.Screen name="phy102etq" options={{title:"Exams, Test's and Quizzes"}} 
            children={() =>
            <CloudinaryDownloader27 contextId={"phy102examstestandquizzes"}/>}
          />
          <Stack.Screen name="phy102rb" options={{title:"Prescribed Books"}} 
            children={() =>
            <CloudinaryDownloader28 contextId={"phy102recommendedbookss"}/>}
          />
          <Stack.Screen name="msm112lcs" options={{title:"Lectures"}} 
            children={() =>
            <CloudinaryDownloader29 contextId={"msm112lectures"}/>}
          />
           <Stack.Screen name="msm112tts" options={{title:"Tutorial Sheets"}} 
            children={() =>
            <CloudinaryDownloader30 contextId={"msm112tutorialsheets"}/>}
          />
          <Stack.Screen name="msm112etq" options={{title:"Exams, Test's and  Quizzes"}} 
            children={() =>
            <CloudinaryDownloader31 contextId={"msm112examstestsandquizzes"}/>}
          />
          <Stack.Screen name="msm112rb" options={{title:"Prescribed Books"}} 
            children={() =>
            <CloudinaryDownloader32 contextId={"msm112recommendedbooks"}/>}
          />
          <Stack.Screen name="AgricstaticsLect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader33 contextId={"AgricstaticsLect"}/>}
          />
          <Stack.Screen name="Agricstaticstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader34 contextId={"Agricstaticstest"}/>}
          />
          <Stack.Screen name="Agricmathlect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader35 contextId={"Agricmathlect"}/>}
          />
          <Stack.Screen name="Agricmathprac" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader36 contextId={"Agricmathprac"}/>}
          />
          <Stack.Screen name="AgricmaterialsLec" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader37 contextId={"AgricmaterialsLec"}/>}
          />
          <Stack.Screen name="Agricmaterialstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader38 contextId={"Agricmaterialstest"}/>}
          />
          <Stack.Screen name="Agricelectlec" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader39 contextId={"Agricelectlec"}/>}
          />
          <Stack.Screen name="Agricelecttest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader40 contextId={"Agricelecttest"}/>}
          />
          <Stack.Screen name="Agricdrawinglect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader41 contextId={"Agricdrawinglect"}/>}
          />
          <Stack.Screen name="Agricdrawingtest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader42 contextId={"Agricdrawingtest"}/>}
          />
          <Stack.Screen name="MechDrawinglect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader43 contextId={"MechDrawinglect"}/>}
          />
          <Stack.Screen name="MechDrawingtest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader44 contextId={"MechDrawingtest"}/>}
          />
          <Stack.Screen name="EEEDrawinglect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader45 contextId={"EEEDrawinglect"}/>}
          />
          <Stack.Screen name="EEEDrawingtest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader46 contextId={"EEEDrawingtest"}/>}
          />
          <Stack.Screen name="CivilDrawinglect" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader47 contextId={"CivilDrawinglect"}/>}
          />
          <Stack.Screen name="CivilDrawingtest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader48 contextId={"CivilDrawingtest"}/>}
          />
           <Stack.Screen name="Civilelectronicslect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader49 contextId={"Civilelectronicslect"}/>}
          />
          <Stack.Screen name="Civilelectronicstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader50 contextId={"Civilelectronicstest"}/>}
          />
          <Stack.Screen name="EEEelectronicslect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader51 contextId={"EEEelectronicslect"}/>}
          />
          <Stack.Screen name="EEEelectronicstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader52 contextId={"EEEelectronicstest"}/>}
          />
          <Stack.Screen name="Mechelectronicslect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader53 contextId={"Mechelectronicslect"}/>}
          />
          <Stack.Screen name="Mechelectronicstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader54 contextId={"Mechelectronicstest"}/>}
          />
          <Stack.Screen name="Civilmaterialslect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader55 contextId={"Civilmaterialslect"}/>}
          />
          <Stack.Screen name="Civilmaterialstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader56 contextId={"Civilmaterialstest"}/>}
          />
          <Stack.Screen name="EEEmaterialstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader57 contextId={"EEEmaterialstest"}/>}
          />
          <Stack.Screen name="EEEmaterialslect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader58 contextId={"EEEmaterialslect"}/>}
          />
          <Stack.Screen name="Mechmaterialslect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader59 contextId={"Mechmaterialslect"}/>}
          />
          <Stack.Screen name="Mechmaterialstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader60 contextId={"Mechmaterialstest"}/>}
          />
          <Stack.Screen name="Civilmathermaticslect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader61 contextId={"Civilmathermaticslect"}/>}
          />
          <Stack.Screen name="Civilmathermaticstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader62 contextId={"Civilmathermaticstest"}/>}
          />
          <Stack.Screen name="EEEmathermaticslect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader63 contextId={"EEEmathermaticslect"}/>}
          />
          <Stack.Screen name="EEEmathermaticstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader64 contextId={"EEEmathermaticstest"}/>}
          />
          <Stack.Screen name="Mechmathermaticslect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader65 contextId={"Mechmathermaticslect"}/>}
          />
          <Stack.Screen name="Mechmathermaticstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader66 contextId={"Mechmathermaticstest"}/>}
          />
          <Stack.Screen name="Civilstaticslect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader67 contextId={"Civilstaticslect"}/>}
          />
          <Stack.Screen name="Civilstaticstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader68 contextId={"Civilstaticstest"}/>}
          />
          <Stack.Screen name="EEEstaticslect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader69 contextId={"EEEstaticslect"}/>}
          />
          <Stack.Screen name="EEEstaticstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader70 contextId={"EEEstaticstest"}/>}
          />
          <Stack.Screen name="Mechstaticstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader71 contextId={"Mechstaticstest"}/>}
          />
          <Stack.Screen name="Mechstaticslect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader72 contextId={"Mechstaticslect"}/>}
          />
          <Stack.Screen name="Accountinglect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader73 contextId={"Accountinglect"}/>}
          />
          <Stack.Screen name="Accountingtest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader74 contextId={"Accountingtest"}/>}
          />
          <Stack.Screen name="Businesslawlect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader75 contextId={"Businesslawlect"}/>}
          />
          <Stack.Screen name="Businesslawtest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader76 contextId={"Businesslawtest"}/>}
          />
          <Stack.Screen name="Economicstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader77 contextId={"Economicstest"}/>}
          />
          <Stack.Screen name="Economicslect" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader78 contextId={"Economicslect"}/>}
          />
          <Stack.Screen name="Intmacrolect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader79 contextId={"Intmacrolect"}/>}
          />
          <Stack.Screen name="Intmacrotest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader80 contextId={"Intmacrotest"}/>}
          />
          <Stack.Screen name="Principlesofmarklect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader81 contextId={"Principlesofmarklect"}/>}
          />
          <Stack.Screen name="Principlesofmarktest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader82 contextId={"Principlesofmarktest"}/>}
          />
          <Stack.Screen name="StatisticsAdminglect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader83 contextId={"StatisticsAdminglect"}/>}
          />
          <Stack.Screen name="StatisticsAdmingtest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader84 contextId={"StatisticsAdmingtest"}/>}
          />
          <Stack.Screen name="Bskillslect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader85 contextId={"Bskillslect"}/>}
          />
          <Stack.Screen name="Bskillstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader86 contextId={"Bskillstest"}/>}
          />
          <Stack.Screen name="Medaidentitylect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader87 contextId={"Medaidentitylect"}/>}
          />
          <Stack.Screen name="Medaidentitytest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader88 contextId={"Medaidentitytest"}/>}
          />
          <Stack.Screen name="MediainZlect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader89 contextId={"MediainZlect"}/>}
          />
          <Stack.Screen name="MediainZtest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader90 contextId={"MediainZtest"}/>}
          />
          <Stack.Screen name="Mediarelationslect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader91 contextId={"Mediarelationslect"}/>}
          />
          <Stack.Screen name="Mediarelationstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader92 contextId={"Mediarelationstest"}/>}
          />
          <Stack.Screen name="Spalect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader93 contextId={"Spalect"}/>}
          />
          <Stack.Screen name="Spatest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader94 contextId={"Spatest"}/>}
          />
          <Stack.Screen name="ITBMGlect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader95 contextId={"ITBMGlect"}/>}
          />
           <Stack.Screen name="ITBMGtest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader96 contextId={"ITBMGtest"}/>}
          />
           <Stack.Screen name="ITComputerArchlect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader97 contextId={"ITComputerArchlect"}/>}
          />
          <Stack.Screen name="ITComputerArchtest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader98 contextId={"ITComputerArchtest"}/>}
          />
          <Stack.Screen name="ITDatabaselect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader99 contextId={"ITDatabaselect"}/>}
          />
           <Stack.Screen name="ITDatabasetest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader100 contextId={"ITDatabasetest"}/>}
          />
          <Stack.Screen name="ITDDlect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader101 contextId={"ITDDlect"}/>}
          />
          <Stack.Screen name="ITDDtest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader102 contextId={"ITDDtest"}/>}
          />
          <Stack.Screen name="ITIntjavalect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader103 contextId={"ITIntjavalect"}/>}
          />
          <Stack.Screen name="ITIntjavatest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader104 contextId={"ITIntjavatest"}/>}
          />
          <Stack.Screen name="ITJava1lect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader105 contextId={"ITJava1lect"}/>}
          />
          <Stack.Screen name="ITJava1test" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader106 contextId={"ITJava1test"}/>}
          />
          <Stack.Screen name="ITNetworkinglect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader107 contextId={"ITNetworkinglect"}/>}
          />
          <Stack.Screen name="ITNetworkingtest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader108 contextId={"ITNetworkingtest"}/>}
          />
          <Stack.Screen name="ITOperatinglect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader109 contextId={"ITOperatinglect"}/>}
          />
          <Stack.Screen name="ITOperatingtest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader110 contextId={"ITOperatingtest"}/>}
          />
          <Stack.Screen name="ITStatisticslect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader111 contextId={"ITStatisticslect"}/>}
          />
          <Stack.Screen name="ITStatisticstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader112 contextId={"ITStatisticstest"}/>}
          />
          <Stack.Screen name="ITAlgorithmslect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader113 contextId={"ITAlgorithmslect"}/>}
          />
          <Stack.Screen name="ITAlgorithmstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader114 contextId={"ITAlgorithmstest"}/>}
          />
          <Stack.Screen name="Algorithmslect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader115 contextId={"Algorithmslect"}/>}
          />
          <Stack.Screen name="Algorithmstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader116 contextId={"Algorithmstest"}/>}
          />
          <Stack.Screen name="Intjavalect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader117 contextId={"Intjavalect"}/>}
          />
          <Stack.Screen name="Intjavatest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader118 contextId={"Intjavatest"}/>}
          />
          <Stack.Screen name="Databaselect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader119 contextId={"Databaselect"}/>}
          />
          <Stack.Screen name="Databasetest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader120 contextId={"Databasetest"}/>}
          />
          <Stack.Screen name="Networkinglect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader121 contextId={"Networkinglect"}/>}
          />
          <Stack.Screen name="Networkingtest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader122 contextId={"Networkingtest"}/>}
          />
          <Stack.Screen name="Operatinglect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader123 contextId={"Operatinglect"}/>}
          />
          <Stack.Screen name="Operatingtest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader124 contextId={"Operatingtest"}/>}
          />
          <Stack.Screen name="ComputerArchlect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader125 contextId={"ComputerArchlect"}/>}
          />
          <Stack.Screen name="ComputerArchtest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader126 contextId={"ComputerArchtest"}/>}
          />
          <Stack.Screen name="DDlect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader127 contextId={"DDlect"}/>}
          />
          <Stack.Screen name="DDtest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader128 contextId={"DDtest"}/>}
          />
          <Stack.Screen name="Descretelect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader129 contextId={"Descretelect"}/>}
          />
          <Stack.Screen name="Descretetest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader130 contextId={"Descretetest"}/>}
          />
          <Stack.Screen name="Java1lect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader131 contextId={"Java1lect"}/>}
          />
          <Stack.Screen name="Java1test" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader132 contextId={"Java1test"}/>}
          />
          <Stack.Screen name="Statisticslect" options={{title:"Notes"}} 
            children={() =>
            <CloudinaryDownloader133 contextId={"Statisticslect"}/>}
          />
          <Stack.Screen name="Statisticstest" options={{title:"Practice"}} 
            children={() =>
            <CloudinaryDownloader134 contextId={"Statisticstest"}/>}
          />
        </Stack.Navigator>
  )
}
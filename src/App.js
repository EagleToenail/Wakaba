import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/Assets/css/responsive.css'

import LayoutWithMainContainer from './Layout/LayoutWithMainContainer';
import LayoutContainer from './Layout/LayoutContainer';

import Login from './Pages/Auth/Login/login';
import Logout from './Pages/Auth/Logout/logout';
import ForgetPassword from './Pages/Auth/ForgerPassword/forgetPassword';
import PasswordSetting from './Pages/Auth/PasswordSetting/passwordSetting';
import Register from './Pages/Auth/Register/register';
import ToMoveInputForm from './Pages/Auth/ToInputForm/toMoveInputForm';
import ConfirmProfile from './Pages/Auth/ConfirmProfile/confirmProfile';
import LoginTimeCard from './Pages/Auth/LoginTimeCard/loginTimeCard';
import LogoutTimeCard from './Pages/Auth/LogoutTimeCard/logoutTimecard';
import ClockedOut from './Pages/Auth/ClockedOut/clockedOut';
import Terms from './Pages/Terms/terms';
import Pledge from './Pages/Pledge/pledge';
import Profile from './Pages/Profile/profile';//
import StartingWork from './Pages/StartingWork/startingWork';//Start of work
import ClosingWork from './Pages/ClosingWork/closingWork';//CLosing work
import MonthlyIncome from './Pages/MonthlyIncome/monthlyIncome';//Monthly income and expenditure report
import SafeMoney from './Pages/SafeMoney/safeMoney';//Treasury deposit and withdrawal history
import WithdrawBankATM from './Pages/WithdrawBankATM/withdrawBankATM';//withdrawal from bank ATM
import PurchaseRequest from './Pages/PurchaseRequest/purchaseRequest';//R shop Purchase Request List confirmation screen
import WithdrawVariousPurchase from './Pages/WithdrawVariousPurchase/withdrawVariousPurchase';//withdrawl puchase for various purchases
import WithdrawApply from './Pages/WithdrawApply/withdrawApply';//WIthdrawal requestfor shipping fees
import CustomerList from './Pages/CustomerList/customerList';//customer List
import CustomerIndividual from './Pages/CustomerIndividual/customerIndividual';//Customer Specific
import CustomerIndividualCreate from './Pages/CustomerIndividualCreate/customerIndividualCreate';//Customer Specific
import PurchaseToRShop from './Pages/PurchaseToRShop/purchaseToRShop';//Purchase application to R shop
import InvoiceForPurchaseOfBrought from './Pages/InvoiceForPurchaseOfBrought/invoiceforpurchaseofbrought';//Application for invoice for purchase of brought-in goods
import InvoiceForPurchaseOfBroughtBlank from './Pages/InvoiceForPurchaseOfBroughtBlank/invoiceforpurchaseofbroughtblank';//Application for invoice for purchase of brought blank-in goods
import InvoiceForPurchaseChat from './Pages/InvoiceForPurchaseChat/invoiceForPurchaseChat';//invoice for purchase chat
import InvoiceForPurchaseList from './Pages/InvoiceForPurchaseList/invoiceForPurchaseList';//invoice for purchase list
import PurchaseInvoiceForBroughtInItems from './Pages/PurchaseInvoiceForBroughtInItems/purchaseInvoiceForBroughtInItems';//Purchase invoice for brought-in items(for customer presentaion)
import WholeSalerShippingList from './Pages/WholeSalerShippingList/wholeSalerShippingList';//Wholesaler Shipping List
import PurchaseRequestFormForWholeSaler from './Pages/PurchaseRequestFormForWholeSaler/purchaseRequestFormForWholeSaler';//Purchase request form
import ShowSalesSlip from "./Pages/ShowSalesSlip/showSalesSlip";//show salesSlip in todolist page
import SalesSlip from './Pages/SalesSlip/salesSlip';//Sales slip
import SalesSlipCreate from './Pages/SalesSlipCreate/salesSlipCreate';//SalesSlipCreate//no need
import SalesSlipUpdate from './Pages/SalesSlipUpdate/salesSlipUpdate';//SalesSlipUpdate
import ContractorAssessmentSheet from './Pages/ContractorAssessmentSheet/contractorAssessmentSheet';//Contractor assessment sheet
import VendorAssessmentSheet from './Pages/ContractorAssessmentSheet/vendorAssessmentSheet';// Vendor assessment sheet
import YahooAuction from './Pages/YahooAuctions/yahooAuction';//Yahoo Auctions
import SalesList from './Pages/SalesList/salesList';//Sales List
import TODOList from './Pages/TODOList/todoList';//ToDo List
import GeneralChat from './Pages/GeneralChat/generalChat';//GenealChat
import StoreChat from './Pages/StoreChat/storeChat';
import OnSitePurchase from './Pages/OnSitePurchase/onSitePurchase';//On-site purchase
import ApplicationForDisposalPermission from './Pages/ApplicationForDisposalPermission/applicationForDisposalPermission';//Application ofr disposal permisssion
import MultiRowShowSalesSlip from './Pages/ApplicationForDisposalPermission/multiRowShowSalesSlip';//show salesSlip data that you want to show row
import EndOfWorkReportToOwner from './Pages/EndOfWorkReportToOwner/endOfWorkReportToOwner';//End of workd report to onwer etc./headquarters
import StampRelatedInventoryList from './Pages/StampRelatedInventoryList/stampRelatedInventoryList';//stamp-related inventory application form #58
import StampRelatedInboundApplicationForm from './Pages/StampRelatedInboundApplicationForm/stampRelatedInboundApplicationForm';//inbound #59
import StampRelatedOutboundApplicationForm from './Pages/StampRelatedOutboundApplicationForm/stampRelatedOutboundApplicationForm';//outbound #60
import StampRelatedReceiptAndIssueHistory from './Pages/StampRelatedReceiptAndIssueHistory/stampRelatedReceiptAndIssueHistory';//stamp related receipt and issue history #61
import StampShippingHistoryDetail from './Pages/StampShippingHistoryDetail/stampShippingHistoryDetail';//#history detail
import StampRelatedPurchaseStatement from './Pages/StampRelatedPurchaseStatement/stampRelatedPurchaseStatement'//stamp related purcase statement #62
import StampPurchaseListCustomerConfirmation from './Pages/StampPurchaseListCustomerConfirmation/stampPurchaseListCustomerConfirmation';//stamp purchase list customer cnfirmation screen #63
import StampPurchaseInterestRateChange from './Pages/StampPurchaseInterestRateChange/stampPurchaseInterestRateChange';//stamp purchase interest rate change application screen//#64
import CommemorativeCoinHistoryList from './Pages/CommemorativeCoinHistoryList/commemorativeCoinHistoryList';// commermorative coin history list
import CommemorativeCoinExchange from './Pages/CommemorativeCoinExchange/commemorativeCoinExchange';// Commermorative coin exchange application
import CommemorativeCoinChangeDetail from './Pages/CommemorativeCoinChangeDetail/commemorativeCoinChangeDetail';//commemorative coin exchange detail
import PreciousMetalsPrices from './Pages/PreciousMetalsPrices/preciousMetalsPrices';//precious Metals Prices
import CustomerReceipt from './Pages/CustomerReceipt/customerReceipt';//Customer receipt

import OwnersTop from './Pages/Admin/OwnersTop/ownersTop';
import OwnersStaffList from './Pages/Admin/OwnersStaffList/ownersStaffList';
import OwnerStaffIndividual from './Pages/Admin/OwnerStaffIndividual/ownerStaffIndividual';
import OwnerStaffIndividualCreate from './Pages/Admin/OwnerStaffIndividualCreate/ownerStaffIndividualCreate';
import StoreListForOwners from './Pages/Admin/StoreListForOwners/storeListForOwners';
import ManagementMasterTOP from './Pages/Admin/ManagementMasterTOP/managementMasterTOP';
import ManagementVariousMasterproductCategory1 from './Pages/Admin/ManagementVariousMasterProductCategory1/managementVariousMasterProductCategory1';
import ManagementVariousMasterproductCategory2 from './Pages/Admin/ManagementVariousMasterProductCategory2/managementVariousMasterProductCategory2';
import ManagementSettingsSuperAdministratorTOP from './Pages/Admin/ManagementSettingsSuperAdministratorTOP/managementSettingsSuperAdministratorTOP';
import ManagementSettingsSuperAdministratorPaymentList from './Pages/Admin/ManagementSettingsSuperAdministratorPaymentList/managementSettingsSuperAdministratorPaymentList';
import ADminSettingsSuperAdministratorSystemBasicSettings from './Pages/Admin/AdminSettingsSuperAdministratorSystemBasicSettings/adminSettingsSuperAdministratorSystemBasicSettigs';
import ManagementSettingsForOwners from './Pages/Admin/ManagementSettingsForOwners/managementSettingsForOwners';

import OwnerAttendanceList from './Pages/Admin/OwnerAttendanceList/ownerAttendanceList';
//  TYPO. App is working well but this importing code has typo.
//  OwnersShi_p_tSchedule, to be OwnersShi_f_tSchedule to match the file name. ONISHI
import OwnersShiftSchedule from './Pages/Admin/OwnersShiftSchedule/ownersShiftSchedule';
import OwnersPayrollCalculationSheet from './Pages/Admin/OwnersPayrollCalculationSheet/ownersPayrollCalculationSheet';
import OwnersPersonalPaySlipPDF from './Pages/Admin/OwnersPersonalPaySlipPDF/ownersPersonalPaySlipPDF';
import OwnerAnalysisComprehensiveAnalysis from './Pages/Admin/OwnerAnalysisComprehensiveAnalysis/ownerAnalysisComprehensiveAnalysis';
import OwnerAnalysisStaffIndividualResults from './Pages/Admin/OwnerAnalysisStaffIndividualResults/ownerAnalysisStaffIndividualResults';
import OwnerAnalysisAreaAnalysis from './Pages/Admin/OwnerAnalysisAreaAnalysis/ownerAnalysisAreaAnalysis';
import ManagementHeadquatersTOP from './Pages/Admin/ManagementHeadquatersTOP/managementHeadquatersTOP';
import ManagementHeadquartersOwnerList from './Pages/Admin/ManagementHeadquartersOwnerList/managementHeadquartersOwnerList';
import ManagementHeadquartersContractPlanSetting from './Pages/Admin/ManagementHeadquartersContractPlanSetting/managementHeadquartersContractPlanSetting';
import ManagementHQRankingFunction from './Pages/Admin/ManagementHQRankingFunction/managementHQRankingFunction';//M26
import ManagementHQScoreCount from './Pages/Admin/ManagementHQScoreCount/managementHQScoreCount';//M27
import ManagementHeadquartersPurchaseItemCount from './Pages/Admin/ManagementHeadquartersPurchaseItemCount/managementHeadquartersPurchaseItemCount';//M28
import ManagementHeadquartersRepeaterAnalysis from './Pages/Admin/ManagementHeadquartersRepeaterAnalysis/managementHeadquartersRepeaterAnalysis';//M29
import AccountingInformationNumberVariousTrendData from './Pages/Admin/AccountingInformationVariousNumberTrendData/accountingInformationVariousNumberTrendData';//M23
import AccountingInformationNumberVariousReferenceData from './Pages/Admin/AccountingInformationVariousNumberReferenceData/accountingInformationVariousNumberReferenceData';//M24
import CustomerVisitRateTrend from './Pages/Admin/CustomerVisitRateTrend/customerVisitRateTrend';
import ManagementHeadquarterAnalysisAndOthers from './Pages/Admin/ManagementHeadquartersAnalysisAndOthers/managementHeadquartersAnalysisAndOthers';//M19

import Calendar from './Pages/Calendar/calendar'

import MainChatPage from './Pages/Chat/mainChatPage';

function App() {
  return (
    <Router>
      <Routes>
          <Route element={<LayoutWithMainContainer/>}>
          {/* message */}
            <Route path='/withdrawbankatm' element={<WithdrawBankATM/>}/>
            <Route path='/withdrawvariouspurchase' element={<WithdrawVariousPurchase/>}/>
            <Route path='/withdrawapply' element={<WithdrawApply/>}/>
            <Route path='/purchasetorshop' element={<PurchaseToRShop/>}/>
            <Route element={<TODOList/>} path='/todolist'/>
            <Route path='/onsitepurchase' element={<OnSitePurchase/>}/>
            <Route path='/applicationfordisposalpermission' element={<ApplicationForDisposalPermission/>}/>
            <Route path='/endofworkreporttoowner' element={<EndOfWorkReportToOwner/>}/>

            <Route path='/generalchat/allgeneral' element={<GeneralChat/>}/>
            <Route path='/generalchat/allforall' element={<GeneralChat/>}/>
            <Route path='/generalchat/wakabapassword' element={<GeneralChat/>}/>
            <Route path='/generalchat/yahooauction' element={<GeneralChat/>}/>
            <Route path='/generalchat/executemeeting' element={<GeneralChat/>}/>
            <Route path='/generalchat/standardout' element={<GeneralChat/>}/>
            <Route path='/generalchat/basereport' element={<GeneralChat/>}/>
            <Route path='/generalchat/training' element={<GeneralChat/>}/>
            <Route path='/generalchat/storecommunication' element={<GeneralChat/>}/>
            <Route path='/generalchat/monthlycampaign' element={<GeneralChat/>}/>
            <Route path='/generalchat/purchaseperformanceblog' element={<GeneralChat/>}/>
            {/* ---in store chat---- */}
            <Route path='/storechat/allgeneral' element={<StoreChat/>}/>
            <Route path='/storechat/businesscommunication' element={<StoreChat/>}/>
            <Route path='/storechat/approval' element={<StoreChat/>}/>
            <Route path='/storechat/wholesalerreport' element={<StoreChat/>}/>
            <Route path='/storechat/orderrequest' element={<StoreChat/>}/>
            <Route path='/storechat/vendorvisit' element={<StoreChat/>}/>
            <Route path='/storechat/shift' element={<StoreChat/>}/>
            <Route path='/storechat/businessreporthandover' element={<StoreChat/>}/>
            <Route path='/storechat/yetanothertashifmeeting' element={<StoreChat/>}/>
            
          {/* ------- */}
            <Route path='/startingwork' element={<StartingWork/>}/>
            <Route path='/closingwork' element={<ClosingWork/>}/>
            <Route path='/monthlyincome' element={<MonthlyIncome/>}/>
            <Route path='/safemoney' element={<SafeMoney/>}/>
            <Route path='/purchaserequest' element={<PurchaseRequest/>}/>
            <Route path='/customerlist' element={<CustomerList/>}/>
            <Route path='/customerindividual/:id' element={<CustomerIndividual/>}/> 
            <Route path='/customerindividualcreate' element={<CustomerIndividualCreate/>}/> 
            <Route path='/invoiceforpurchaseofbrought/:id' element={<InvoiceForPurchaseOfBrought/>}/>
            <Route path='/invoiceforpurchaseofbroughtblank' element={<InvoiceForPurchaseOfBroughtBlank/>}/>
            <Route path='/invoiceforpurchasechat' element={<InvoiceForPurchaseChat/>}/>
            <Route path='/invoiceforpurchaselist' element={<InvoiceForPurchaseList/>}/>
            <Route path='/wholesalershippinglist' element={<WholeSalerShippingList/>}/>
            <Route path='/purchaserequestformforwholesaler' element={<PurchaseRequestFormForWholeSaler/>}/>
            <Route path='/salesslip' element={<SalesSlip/>}/>
            <Route path='/showsalesslip' element={<ShowSalesSlip/>}/>
            <Route path='/salesslipcreate' element={<SalesSlipCreate/>}/>
            <Route path='/salesslipupdate/:id' element={<SalesSlipUpdate/>}/>
            <Route path='/contractorassessmentsheet' element={<ContractorAssessmentSheet/>}/>
            <Route path='/vendorassessmentsheet' element={<VendorAssessmentSheet/>}/>
            <Route path='/yahooauction' element={<YahooAuction/>}/>
            <Route path='/saleslist' element={<SalesList/>}/>
            <Route path='/stamprelatedinventorylist' element={<StampRelatedInventoryList/>}/>
            <Route path='/stamprelatedinboundapplicationform' element={<StampRelatedInboundApplicationForm/>}/>
            <Route path='/stamprelatedoutboundapplicationform' element={<StampRelatedOutboundApplicationForm/>}/>
            <Route path='/stamprelatedreceiptandissuehistory' element={<StampRelatedReceiptAndIssueHistory/>}/>
            <Route path='/stampshippinghistorydetail/:id' element={<StampShippingHistoryDetail/>}/>
            <Route path='/stamprelatedpurchasestatement/:id' element={<StampRelatedPurchaseStatement/>}/>
            <Route path='/stamppurchaselistcustomerconfirmation' element={<StampPurchaseListCustomerConfirmation/>}/>
            <Route path='/stamppurchaseinterestratechange' element={<StampPurchaseInterestRateChange/>}/>
            <Route path='/commemorativecoinhistorylist' element={<CommemorativeCoinHistoryList/>}/>
            <Route path='/commemorativecoinchangedetail/:id' element={<CommemorativeCoinChangeDetail/>}/>
            <Route path='/commemorativecoinexchange' element={<CommemorativeCoinExchange/>}/>
            <Route path='/preciousmetalsprices' element={<PreciousMetalsPrices/>}/>
            <Route path='/customerreceipt' element={<CustomerReceipt/>}/>  
            <Route path='/multirowshowsalesslip' element={<MultiRowShowSalesSlip/>}/>  
            {/* admin */}
            <Route path='/admin/ownerstop' element={<OwnersTop/>}/>
            <Route path='/admin/ownersstafflist' element={<OwnersStaffList/>}/>
            <Route path='/admin/ownerstaffindividual/:id' element={<OwnerStaffIndividual/>}/>
            <Route path='/admin/ownerstaffindividualcreate' element={<OwnerStaffIndividualCreate/>}/>
            <Route path='/admin/storelistforowners' element={<StoreListForOwners/>}/>
            <Route path='/admin/managementmastertop' element={<ManagementMasterTOP/>}/>
            <Route path='/admin/managementvariousmasterproductcategory1' element={<ManagementVariousMasterproductCategory1/>}/>
            <Route path='/admin/managementvariousmasterproductcategory2' element={<ManagementVariousMasterproductCategory2/>}/>
            <Route path='/admin/managementSettingSuperAdministratorTOP' element={<ManagementSettingsSuperAdministratorTOP/>}/>
            <Route path='/admin/managementSettingSuperAdministratorpaymentlist' element={<ManagementSettingsSuperAdministratorPaymentList/>}/>
            <Route path='/admin/adminsettingssuperadministratorsystembasicsettings' element={<ADminSettingsSuperAdministratorSystemBasicSettings/>}/>
            <Route path='/admin/managementsettingsforowners' element={<ManagementSettingsForOwners/>}/>
            
            <Route path='/calendar' element={<Calendar/>}/>

            {/* second milestone */}
            <Route path='/admin/ownerattendancelist' element={<OwnerAttendanceList/>}/>
            {/* typo? should be "ownersShi_f_tSchedule" for this routing.
                Path itself is working because import code has also typo.
                priolity is low, but someday please fix those typos.
            */}
            <Route path='/admin/ownersshiftschedule' element={<OwnersShiftSchedule/>}/>
            <Route path='/admin/ownerspayrollcalculationsheet' element={<OwnersPayrollCalculationSheet/>}/>
            <Route path='/admin/ownerspersonalpayslippdf' element={<OwnersPersonalPaySlipPDF/>}/>
            <Route path='/admin/owneranalysiscomprehensiveanalysis' element={<OwnerAnalysisComprehensiveAnalysis/>}/>
            <Route path='/admin/owneranalysisstaffindividualresults' element={<OwnerAnalysisStaffIndividualResults/>}/>
            <Route path='/admin/owneranalysisareaanalysis' element={<OwnerAnalysisAreaAnalysis/>}/>
            <Route path='/admin/managementheadquaterstop' element={<ManagementHeadquatersTOP/>}/>
            <Route path='/admin/managementheadquartersownerlist' element={<ManagementHeadquartersOwnerList/>}/>
            <Route path='/admin/managementheadquarterscontractplansetting' element={<ManagementHeadquartersContractPlanSetting/>}/>
            <Route path='/admin/managementhqrankingfunction' element={<ManagementHQRankingFunction/>}/>
            <Route path='/admin/managementhqscorecount' element={<ManagementHQScoreCount/>}/>
            <Route path='/admin/managementheadquarterspurchaseitemcount' element={<ManagementHeadquartersPurchaseItemCount/>}/>
            <Route path='/admin/managementheadquartersrepeateranalysis' element={<ManagementHeadquartersRepeaterAnalysis/>}/>
            <Route path='/admin/accountinginformationvarioustrenddata' element={<AccountingInformationNumberVariousTrendData/>}/>
            <Route path='/admin/accountinginformationvariousreferencedata' element={<AccountingInformationNumberVariousReferenceData/>}/>
            <Route path='/admin/customervisitratetrend' element={<CustomerVisitRateTrend/>}/>
            <Route path='/admin/managementheadquarteranalysisandothers' element={<ManagementHeadquarterAnalysisAndOthers/>}/>

          </Route>

            <Route exact path='/' element={<Login/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/forgetpassword' element={<ForgetPassword/>}/>
            <Route path='/passwordsetting' element={<PasswordSetting/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/tomoveinputform' element={<ToMoveInputForm/>}/>
            <Route path='/confirmprofile' element={<ConfirmProfile/>}/>
            <Route path='/logintimecard' element={<LoginTimeCard/>}/>
            <Route path='/logouttimecard' element={<LogoutTimeCard/>}/>
            <Route path='/clockedout' element={<ClockedOut/>}/>
            <Route path='/terms' element={<Terms/>}/>
            <Route path='/pledge' element={<Pledge/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/purchaseinvoiceforbroughtinitems' element={<PurchaseInvoiceForBroughtInItems/>}/>

          <Route element={<LayoutContainer/>}>
            <Route path='/chat' element={<MainChatPage/>}/>
          </Route>
            
      </Routes>
    </Router>
  );
}

export default App;

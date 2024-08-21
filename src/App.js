import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LayoutWithMainContainer from './Layout/LayoutWithMainContainer';

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
import PurchaseToRShop from './Pages/PurchaseToRShop/purchaseToRShop';//Purchase application to R shop
import InvoiceForPurchaseOfBrought from './Pages/InvoiceForPurchaseOfBrought/invoiceforpurchaseofbrought';//Application for invoice for purchase of brought-in goods
import PurchaseInvoiceForBroughtInItems from './Pages/PurchaseInvoiceForBroughtInItems/purchaseInvoiceForBroughtInItems';//Purchase invoice for brought-in items(for customer presentaion)
import WholeSalerShippingList from './Pages/WholeSalerShippingList/wholeSalerShippingList';//Wholesaler Shipping List
import PurchaseRequestFormForWholeSaler from './Pages/PurchaseRequestFormForWholeSaler/purchaseRequestFormForWholeSaler';//Purchase requesr form
import SalesSlip from './Pages/SalesSlip/salesSlip';//Sales slip
import ContractorAssessmentSheet from './Pages/ContractorAssessmentSheet/contractorAssessmentSheet';//Contractor assessment sheet
import YahooAuction from './Pages/YahooAuctions/yahooAuction';//Yahoo Auctions
import SalesList from './Pages/SalesList/salesList';//Sales List
import TODOList from './Pages/TODOList/todoList';//ToDo List
import OnSitePurchase from './Pages/OnSitePurchase/onSitePurchase';//On-site purchase
import ApplicationForDisposalPermission from './Pages/ApplicationForDisposalPermission/applicationForDisposalPermission';//Application ofr disposal permisssion
import EndOfWorkReportToOwner from './Pages/EndOfWorkReportToOwner/endOfWorkReportToOwner';//End of workd report to onwer etc./headquarters
import StampRelatedInventoryList from './Pages/StampRelatedInventoryList/stampRelatedInventoryList';//stamp-related inventory application form
import StampRelatedInventoryApplicationForm from './Pages/StampRelatedInventoryApplicationForm/stampRelatedInventoryApplicationForm';
import StampRelatedReceiptAndIssueHistory from './Pages/StampRelatedReceiptAndIssueHistory/stampRelatedReceiptAndIssueHistory';//stamp related receipt and issue history
import StampRelatedPurchaseStatement from './Pages/StampRelatedPurchaseStatement/stampRelatedPurchaseStatement'//stamp related purcase statement
import StampPurchaseListCustomerConfirmation from './Pages/StampPurchaseListCustomerConfirmation/stampPurchaseListCustomerConfirmation';//stamp purchase list customer cnfirmation screen
import StampPurchaseInterestRateChange from './Pages/StampPurchaseInterestRateChange/stampPurchaseInterestRateChange';//stamp purchase interest rate change application screen
import CommemorativeCoinHistoryList from './Pages/CommemorativeCoinHistoryList/commemorativeCoinHistoryList';// commermorative coin history list
import CommemorativeCoinExchange from './Pages/CommemorativeCoinExchange/commemorativeCoinExchange';// Commermorative coin exchange application
import PreciousMetalsPrices from './Pages/PreciousMetalsPrices/preciousMetalsPrices';//precious Metals Prices
import CustomerReceipt from './Pages/CustomerReceipt/customerReceipt';//Customer receipt

import OwnersTop from './Pages/Admin/OwnersTop/ownersTop';
import OwnersStaffList from './Pages/Admin/OwnersStaffList/ownersStaffList';
import OwnerStaffIndividual from './Pages/Admin/OwnerStaffIndividual/ownerStaffIndividual';
import StoreListForOwners from './Pages/Admin/StoreListForOwners/storeListForOwners';



function App() {
  return (
    <Router>
      <Routes>
          <Route element={<LayoutWithMainContainer/>}>
            <Route path='/withdrawbankatm' element={<WithdrawBankATM/>}/>
            <Route path='/withdrawvariouspurchase' element={<WithdrawVariousPurchase/>}/>
            <Route path='/withdrawapply' element={<WithdrawApply/>}/>
            <Route path='/purchasetorshop' element={<PurchaseToRShop/>}/>
            <Route element={<TODOList/>} path='/todolist'/>
            <Route path='/onsitepurchase' element={<OnSitePurchase/>}/>
            <Route path='/applicationfordisposalpermission' element={<ApplicationForDisposalPermission/>}/>
            <Route path='/endofworkreporttoowner' element={<EndOfWorkReportToOwner/>}/>
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
            <Route path='/startingwork' element={<StartingWork/>}/>
            <Route path='/closingwork' element={<ClosingWork/>}/>
            <Route path='/monthlyincome' element={<MonthlyIncome/>}/>
            <Route path='/safemoney' element={<SafeMoney/>}/>
            <Route path='/purchaserequest' element={<PurchaseRequest/>}/>
            <Route path='/customerlist' element={<CustomerList/>}/>
            <Route path='/customerindividual' element={<CustomerIndividual/>}/>     
            <Route path='/invoiceforpurchaseofbrought' element={<InvoiceForPurchaseOfBrought/>}/>
            <Route path='/purchaseinvoiceforbroughtinitems' element={<PurchaseInvoiceForBroughtInItems/>}/>
            <Route path='/wholesalershippinglist' element={<WholeSalerShippingList/>}/>
            <Route path='/purchaserequestformforwholesaler' element={<PurchaseRequestFormForWholeSaler/>}/>
            <Route path='/salesslip' element={<SalesSlip/>}/>
            <Route path='/contractorassessmentsheet' element={<ContractorAssessmentSheet/>}/>
            <Route path='/yahooauction' element={<YahooAuction/>}/>
            <Route path='/saleslist' element={<SalesList/>}/>
            <Route path='/stamprelatedinventorylist' element={<StampRelatedInventoryList/>}/>
            <Route path='/stamprelatedinventoryapplicationform' element={<StampRelatedInventoryApplicationForm/>}/>
            <Route path='/stamprelatedreceiptandissuehistory' element={<StampRelatedReceiptAndIssueHistory/>}/>
            <Route path='/stamprelatedpurchasestatement' element={<StampRelatedPurchaseStatement/>}/>
            <Route path='/stamppurchaselistcustomerconfirmation' element={<StampPurchaseListCustomerConfirmation/>}/>
            <Route path='/stamppurchaseinterestratechange' element={<StampPurchaseInterestRateChange/>}/>
            <Route path='/commemorativecoinhistorylist' element={<CommemorativeCoinHistoryList/>}/>
            <Route path='/commemorativecoinexchange' element={<CommemorativeCoinExchange/>}/>
            <Route path='/preciousmetalsprices' element={<PreciousMetalsPrices/>}/>
            <Route path='/customerreceipt' element={<CustomerReceipt/>}/>

            
            
            <Route path='/admin/ownerstop' element={<OwnersTop/>}/>
            <Route path='/admin/ownersstafflist' element={<OwnersStaffList/>}/>
            <Route path='/admin/ownerstaffindividual' element={<OwnerStaffIndividual/>}/>
            <Route path='/admin/storelistforowners' element={<StoreListForOwners/>}/>

      </Routes>
    </Router>
  );
}

export default App;

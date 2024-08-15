import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainHome from './Pages/Dashboard/MainHome';
import Login from './Pages/Auth/Login/login';
import Logout from './Pages/Auth/Logout/logout';
import ForgetPassword from './Pages/Auth/ForgerPassword/forgetPassword';
import PasswordSetting from './Pages/Auth/PasswordSetting/passwordSetting';
import Register from './Pages/Auth/Register/register';
import ToMoveInputForm from './Pages/Auth/ForInputForm/toMoveInputForm';
import ConfirmProfile from './Pages/Auth/ConfirmProfile/confirmProfile';
import LoginTimeCard from './Pages/Auth/LoginTimeCard/loginTimeCard';
import LogoutTimeCard from './Pages/Auth/LogoutTimeCard/logoutTimecard';
import ClockedOut from './Pages/Auth/ClockedOut/clockedOut';
import Terms from './Pages/Terms/terms';
import Pledge from './Pages/Pledge/pledge';
import Profile from './Pages/Profile/profile';
import StartingWork from './Pages/StartingWork/startingWork';
import ClosingWork from './Pages/ClosingWork/closingWork';
import MonthlyIncome from './Pages/MonthlyIncome/monthlyIncome';
import SafeMoney from './Pages/SafeMoney/safeMoney';
import WithdrawBankATM from './Pages/WithdrawBankATM/withdrawBankATM';
import PurchaseRequest from './Pages/PurchaseRequest/purchaseRequest';
import WithdrawVariousPurchase from './Pages/WithdrawVariousPurchase/withdrawVariousPurchase';
import WithdrawApply from './Pages/WithdrawApply/withdrawApply';
import CustomerList from './Pages/CustomerList/customerList';
import CustomerIndividual from './Pages/CustomerIndividual/customerIndividual';
import PurchaseToRShop from './Pages/PurchaseToRShop/purchaseToRShop';
import InvoiceForPurchaseOfBrought from './Pages/InvoiceForPurchaseOfBrought/invoiceforpurchaseofbrought';
import PurchaseInvoiceForBroughtInItems from './Pages/PurchaseInvoiceForBroughtInItems/purchaseInvoiceForBroughtInItems';
import WholeSalerShippingList from './Pages/WholeSalerShippingList/wholeSalerShippingList';
import PurchaseRequestFormForWholeSaler from './Pages/PurchaseRequestFormForWholeSaler/purchaseRequestFormForWholeSaler';
import SalesSlip from './Pages/SalesSlip/salesSlip';
import ContractorAssessmentSheet from './Pages/ContractorAssessmentSheet/contractorAssessmentSheet';

function App() {
  return (
    <Router>
       <Routes>
            <Route path='/home' element={<MainHome/>}/>
            <Route path='/login' element={<Login/>}/>
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
            <Route path='/withdrawbankatm' element={<WithdrawBankATM/>}/>
            <Route path='/purchaserequest' element={<PurchaseRequest/>}/>
            <Route path='/withdrawvariouspurchase' element={<WithdrawVariousPurchase/>}/>
            <Route path='/withdrawapply' element={<WithdrawApply/>}/>
            <Route path='/customerlist' element={<CustomerList/>}/>
            <Route path='/customerinvidual' element={<CustomerIndividual/>}/>
            <Route path='/purchasetorshop' element={<PurchaseToRShop/>}/>
            <Route path='/invoiceforpurchaseofbrought' element={<InvoiceForPurchaseOfBrought/>}/>
            <Route path='/purchaseinvoiceforbroughtinitems' element={<PurchaseInvoiceForBroughtInItems/>}/>
            <Route path='/wholesalershippinglist' element={<WholeSalerShippingList/>}/>
            <Route path='/purchaserequestformforwholesaler' element={<PurchaseRequestFormForWholeSaler/>}/>
            <Route path='/salesslip' element={<SalesSlip/>}/>
            <Route path='/contractorassessmentsheet' element={<ContractorAssessmentSheet/>}/>
          
       </Routes>
    </Router>
  );
}

export default App;

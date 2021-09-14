import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Mint from "./pages/mint";
import Dashboard from "./pages/dashboard";
import Inventory from "./pages/inventory";
import { useState } from "react";


function App() {

    const [isModalOpen, setOpenModal] = useState(false);
    const [walletAddress, setWallet] = useState(false);
    const [status, setStatus] = useState(false);
    console.log(status);
    return (
        <BrowserRouter>
            <Navbar isModalOpen={isModalOpen} setModal={setOpenModal}  walletAddress={walletAddress} setWallet={setWallet} status={status} setStatus={setStatus} />
            <Switch>
                <Route path="/mint">
                    <Mint walletAddress={walletAddress} status={status} setStatus={setStatus} />
                </Route>
                <Route path="/dashboard">
                    <Dashboard walletAddress={walletAddress} setWallet={setWallet} />
                </Route>
                <Route path="/inventory">
                    <Inventory />
                </Route>
                <Route path="/">
                    <Hero isModalOpen={isModalOpen} setModal={setOpenModal}  walletAddress={walletAddress} setWallet={setWallet} status={status} setStatus={setStatus} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

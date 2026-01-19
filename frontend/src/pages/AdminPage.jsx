import React, {useEffect, useState} from 'react'
import {useAuth} from "../contexts/AuthContext.jsx";
import axios from "axios";
import Header from "../components/Header.jsx";
import {DataTable} from "@/components/data-table/data-table.tsx";
import DemoPage from "@/components/data-table/page.tsx";



const AdminPage = () => {
    const { user, isAdmin } = useAuth();

    return (
        <>
            <Header/>
            <DemoPage></DemoPage>
        </>
    );
}
export default AdminPage

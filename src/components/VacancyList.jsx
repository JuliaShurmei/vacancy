import React, { useEffect, useState } from "react";
import { API_URL } from "../API";
import axios from "axios";

export const url = "https://startup-summer-2023-proxy.onrender.com/2.0/vacancies";
function VacancyList() {
  
  const fetch = async () => {
    try {
        const {data } = await axios(url, {
            headers: {
                "x-secret-key": "GEU4nvd3rej*jeh.eqp"
            },
        })
    } catch (error) {
        console.log (error.response)
    }
  }
  return <div className='vacancy-list'> VacancyList</div>;
}

export default VacancyList;

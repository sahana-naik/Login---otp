import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useUserContext } from "../../ccontext/userContext";
import Categories from "./Categories";
import "./Article.scss";
import List from "./List";

const Articles = () => {
  const [data, setData] = useState();
  const { user = {} } = useUserContext();

  const UserInfo = useMemo(() => {
    return user && user.user && user.user.data;
  }, [user]);


  const token = UserInfo?.access_token;

  const initMinute = 1;
  const initSeconds = 0;
  const [minutes, setMinutes] = useState(initMinute);
  const [seconds, setSeconds] = useState(initSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const timerHandler = () => {
    setMinutes(1);
    setSeconds(0);
  };

  useEffect(() => {
    if (seconds === 0 && minutes === 0) {
      axios
        .post(
          `https://stage-services.truemeds.in/ArticleService/getArticleListing`,
          {
            headers: {
              Authorization: "Bearer" + token,
            },
          }
        )
        .then((res) => {
          console.log("ress", res);
          setData(res && res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [seconds, minutes]);

  return (
    <React.Fragment>
      <div className="timer-wrap">

     <p> <span>{minutes}</span> : <span>{seconds}</span></p>
      </div>
      <button onClick={timerHandler} className='reset-btn'>Reset</button>
      {minutes === 0 && seconds === 0 && (
        <>
          <Categories data={data} />
          <List data={data} />
        </>
      )}

     
    </React.Fragment>
  );
};

export default Articles;

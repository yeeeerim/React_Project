import Axios from "axios";
import React, { useState, useEffect } from "react";

function Subscribe(props) {
  const [subscribeNumber, setsubscribeNumber] = useState(0);
  const [subscribed, setsubscribed] = useState(false);

  useEffect(() => {
    let variable = { userTo: props.userTo, userFrom: props.userFrom };
    Axios.post("/api/subscribe/subscribeNumber", variable).then((response) => {
      if (response.data.success) {
        setsubscribeNumber(response.data.subscribeNumber);
      } else {
        alert("구독자 수 정보를 받아오지 못했습니다.");
      }

      let subscribedVariable = {
        userTo: props.userTo,
        userFrom: localStorage.getItem("userId"),
      };

      Axios.post("/api/subscribe/subscribed", subscribedVariable).then(
        (response) => {
          if (response.data.success) {
            setsubscribed(response.data.subscribed);
          } else {
            alert("정보를 받아오지 못했습니다.");
          }
        }
      );
    });
  }, []);

  const onSubscribe = () => {
    let subscribedVariable = {
      userTo: props.userTo,
      userFrom: props.userFrom,
    };

    if (subscribed) {
      // 이미 구독 중
      Axios.post("/api/subscribe/unSubscribe", subscribedVariable).then(
        (response) => {
          if (response.data.success) {
            setsubscribeNumber(subscribeNumber - 1);
            setsubscribed(!subscribed);
          } else {
            alert("구독 취소에 실패했습니다.");
          }
        }
      );
    } else {
      // 구독 중 X
      Axios.post("/api/subscribe/subscribe", subscribedVariable).then(
        (response) => {
          if (response.data.success) {
            setsubscribeNumber(subscribeNumber + 1);
            setsubscribed(!subscribed);
          } else {
            alert("구독에 실패했습니다.");
          }
        }
      );
    }
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: `${subscribed ? "#AAAAAA" : "#cc0000"}`,
          borderRadius: "4px",
          color: "white",
          padding: "10px 16px",
          fontWeight: "500",
          fontSize: "1rem",
          textTransform: "uppercase",
        }}
        onClick={onSubscribe}
      >
        {subscribeNumber} {subscribed ? "Subscribed" : "Subscribe"}
      </button>
    </div>
  );
}

export default Subscribe;

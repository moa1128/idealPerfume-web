import React, { Fragment } from "react";
import { Button, Typography, Fade } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../page.css";

const pageHome = () => {
  return (
    <Fragment>
      <div
        style={{
          marginTop: "80%",
          marginLeft: 30,
          marginRight: 30,
          position: "flex",
        }}
      >
        <Fade in={true} timeout={1000}>
          <Typography className="Text" style={{ fontSize: 30, color: "white" }}>
            <span>당신이 그리는</span>
            <br></br>
            <span style={{ marginTop: 0 }}>찾아주는</span>
            <br></br>
            <span style={{ marginTop: 0 }}> 큐레이션 서비스</span>
            <br></br>
            <span style={{ marginTop: 5, fontSize: 40, fontWeight: "bold" }}>
              이상향 香
            </span>
          </Typography>
        </Fade>

        <Link
          to="/page0-0"
          style={{
            textDecoration: "none",
          }}
        >
          <Button
            style={{
              width: "100%",
              color: "white",
              marginTop: 25,
            }}
          >
            <Fade in={true} timeout={7000}>
              <Typography
                className="Text"
                style={{
                  fontSize: 20,
                }}
              >
                탭하여 테스트 시작하기
              </Typography>
            </Fade>
          </Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default pageHome;
import React, { useEffect, useState } from "react";
import { Row, Col, List, Avatar } from "antd";
import Axios from "axios";
import SideVideo from "./Sections/SideVideo";
import Subscribe from "./Sections/Subscribe";

function VideoDetailPage(props) {
  const videoId = props.match.params.videoId;
  const variable = { videoId: videoId };

  const [VideoDetail, setVideoDetail] = useState([]);

  useEffect(() => {
    Axios.post("/api/video/getVideoDetail", variable).then((response) => {
      if (response.data.success) {
        setVideoDetail(response.data.videoDetail);
      } else {
        alert("비디오 정보 가져오기를 실패했습니다.");
      }
    });
  }, []);
  if (VideoDetail.writer) {
    console.log(VideoDetail);
    return (
      <Row gutter={[16, 16]}>
        <Col lg={18} xs={24}>
          {/* Main Video */}
          <div style={{ width: "100%", padding: "3rem 4rem" }}>
            <video
              style={{ width: "100%" }}
              src={`http://localhost:5000/${VideoDetail.filePath}`}
              controls
            />
            <List.Item
              actions={[
                <Subscribe
                  userTo={VideoDetail.writer._id}
                  userFrom={localStorage.getItem("userId")}
                />,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={VideoDetail.writer.image} />}
                title={VideoDetail.writer.name}
                description={VideoDetail.description}
              />
            </List.Item>
            {/* Comments */}
          </div>
        </Col>
        <Col lg={6} xs={24}>
          {/* Side Videos */}
          <SideVideo />
        </Col>
      </Row>
    );
  } else {
    return <div style={{ padding: "2rem 2rem" }}>...Loading</div>;
  }
}

export default VideoDetailPage;

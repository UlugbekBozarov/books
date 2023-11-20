import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get } from "lodash";

import { Button, Container, Typography } from "library";
import { client } from "services/api";
import { ChevronLeft, ChevronRight } from "assets/icons";
import "suneditor/dist/css/suneditor.min.css";

const Content = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();

  const [subject, setSubject] = useState<{
    status: "loading" | "success" | "error";
    data?: any;
  }>({
    status: "loading",
    data: {},
  });

  const getContent = (subjectId: string) => {
    client
      .get(`topics/by-id/${subjectId}`)
      .then((response: any) => {
        setSubject({
          status: "success",
          data: response,
        });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const goBack = () => {
    navigate(-1);
  };

  const goToOtherSubject = (subjectId: string) => () => {
    navigate(`/content/${subjectId}`);
  };

  useEffect(() => {
    if (subjectId) {
      getContent(subjectId);
    }
  }, [subjectId]);

  return (
    <Container>
      <div style={{ paddingTop: "20px", marginBottom: "20px" }}>
        <Button onClick={goBack} startIcon={<ChevronLeft />}>
          Ortga
        </Button>
      </div>
      <div style={{ minHeight: "calc(100vh - 282px)" }}>
        {get(subject, "status") === "loading" ? (
          "Loading..."
        ) : get(subject, "status") === "error" ? (
          "Error"
        ) : (
          <div>
            <Typography
              component="h2"
              sx={{ textAlign: "center", marginBottom: "20px" }}
            >
              {get(subject, "data.data.name")}
            </Typography>
            <div
              className="sun-editor-editable"
              dangerouslySetInnerHTML={{
                __html: get(subject, "data.data.content", ""),
              }}
            />
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <div>
          {get(subject, "data.previousTopicId", null) !== null && (
            <Button
              startIcon={<ChevronLeft />}
              onClick={goToOtherSubject(get(subject, "data.previousTopicId"))}
            >
              Oldingisi
            </Button>
          )}
        </div>
        <div>
          {get(subject, "data.nextTopicId", null) !== null && (
            <Button
              endIcon={<ChevronRight />}
              onClick={goToOtherSubject(get(subject, "data.nextTopicId"))}
            >
              Keyingisi
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Content;

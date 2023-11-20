import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { debounce, get } from "lodash";

import { client } from "services/api";
import { ChevronLeft, Search } from "assets/icons";
import { Button, Container, Input, Typography } from "library";

import { SubjectFilter, SubjectItem, SubjectList } from "./Subjects.style";

const Subjects = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const [subjects, setSubjects] = useState<{
    status: "loading" | "success" | "error";
    data: [];
  }>({
    status: "loading",
    data: [],
  });

  const getSubjects = (search?: string) => {
    client
      .get(`topics/${bookId}`, {
        params: {
          search,
        },
      })
      .then((response: any) => {
        console.log("Response: ", response);
        setSubjects({
          status: "success",
          data: response,
        });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const handleChangeInput = debounce((event: ChangeEvent<HTMLInputElement>) => {
    getSubjects(get(event, "target.value"));
  }, 300);

  const goToContend = (subjectId: string) => () => {
    navigate(`/content/${subjectId}`);
  };

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getSubjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <SubjectFilter>
        <Button onClick={goBack} startIcon={<ChevronLeft />}>
          Ortga
        </Button>
        <Input
          startIcon={<Search />}
          onChange={handleChangeInput}
          placeholder="Search..."
        />
      </SubjectFilter>
      <Typography
        component="h2"
        textAlign="center"
        sx={{ marginTop: "20px", marginBottom: "20px" }}
      >
        Mundarija
      </Typography>
      <SubjectList>
        {get(subjects, "status") === "loading"
          ? "Loading..."
          : get(subjects, "status") === "error"
          ? "error"
          : get(subjects, "data", [])?.map((subject: any) => (
              <SubjectItem
                onClick={goToContend(get(subject, "id"))}
                key={get(subject, "id")}
              >
                {get(subject, "name")}
                <span />
              </SubjectItem>
            ))}
      </SubjectList>
    </Container>
  );
};

export default Subjects;

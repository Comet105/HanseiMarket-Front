import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../../components/Header";
import Img from "../../../assets/png/test5.png";
import { useDispatch } from "react-redux";
import { addproduct, getimage } from "../../../store/actions/UserAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import NumberFormat from "react-number-format";

const AddDetailPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productTitle, setProductTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCateGory] = useState("카테고리 선택");
  const [files, setFiles] = useState("");

  const onLoadFile = (e) => {
    const file = e.target.files;
    // console.log(file);
    setFiles(file);
  };

  const handleClick = (e) => {
    const formdata = new FormData();
    formdata.append("images", files[0]);

    const config = {
      Headers: {
        "content-type": "multipart/form-data",
      },
    };
    dispatch(getimage(formdata, config))
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const onChangeHandler = (value) => {
  //   const comma = (value) => {
  //     value = String(value);
  //     return value.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  //   };
  //   const uncomma = (value) => {
  //     value = String(value);
  //     return value.replace(/[^\d]+/g, "");
  //   };
  //   return comma(uncomma(value));
  // };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const body = {
      title: productTitle,
      price: parseInt(price),
      description: description,
      category: category,
    };

    dispatch(addproduct(body)).then((res) => {
      if (res.payload) {
        toast.success("등록 성공", {
          autoClose: 1500,
        });
        navigate("/list");
      } else {
        toast.error("등록 실패", {
          autoClose: 1500,
        });
      }
    });
  };

  return (
    <>
      <Header />
      <AddDetailWrapper>
        <Innerbox>
          <Title>상품 등록</Title>

          <AddPhotoForm onSubmit={onSubmitHandler}>
            <label for="file-input">
              <AddPhotoImg src={Img} />
            </label>

            <input
              id="file-input"
              type="file"
              style={{ display: "none" }}
              accept="img/*"
              onChange={onLoadFile}
            />
          </AddPhotoForm>

          <Hr />
          <AddDetialForm onSubmit={onSubmitHandler}>
            <ProductInput
              type="text"
              value={productTitle}
              onChange={(e) => setProductTitle(e.currentTarget.value)}
              placeholder="글 제목"
            />

            <Hr />

            <ProductSelect
              type="select"
              value={category}
              onChange={(e) => setCateGory(e.target.value)}
            >
              <option value="카테고리 선택">카테고리 선택</option>
              <option value="전자제품">전자제품</option>
              <option value="자격증책">자격증책</option>
              <option value="언어공부책">언어공부책</option>
              <option value="기타">기타</option>
            </ProductSelect>

            <Hr />

            <NumFormat
              thousandSeparator={true}
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="가격"
            />

            <Hr />
            <ProductInput
              type="text"
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
              placeholder="상품설명"
            />

            <AddDetailButton type="submit" onClick={handleClick}>
              등록하기
            </AddDetailButton>
          </AddDetialForm>
        </Innerbox>
      </AddDetailWrapper>
    </>
  );
};

const AddDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Innerbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 30px;
`;

const AddPhotoForm = styled.form`
  border: 0;
  margin: 3rem 16rem 2rem 0rem;
  background-color: transparent;
  cursor: pointer;
`;

const AddPhotoImg = styled.img`
  width: 10rem;
  height: 7rem;
  cursor: pointer;
`;

const Hr = styled.div`
  border: 1px solid silver;
  width: 25rem;
`;

const NumFormat = styled(NumberFormat)`
  display: block;
  border: 0;
  padding: 0.8rem 0rem 0.8rem 0rem;
  margin: 1rem 0rem 1rem 0rem;
  border-radius: 3px;
  word-wrap: break-word;
  word-break: break-word;

  ::placeholder {
    color: #9f9f9f;
  }
  :focus {
    outline: 1px solid gray;
  }
`;

const AddDetialForm = styled.form`
  display: flex;
  width: 25rem;
  flex-direction: column;
`;

const ProductInput = styled.input`
  display: block;
  border: 0;
  padding: 0.8rem 0rem 0.8rem 0rem;
  margin: 1rem 0rem 1rem 0rem;
  border-radius: 3px;
  word-wrap: break-word;
  word-break: break-word;

  ::placeholder {
    color: #9f9f9f;
  }
  :focus {
    outline: 1px solid gray;
  }
`;

const ProductSelect = styled.select`
  border: none;
  margin: 1rem 0rem 1rem 0rem;
  padding: 0.7rem 0rem 0.7rem 0rem;
  border-radius: 5px;
  outline: none;

  :focus {
    outline: 1px solid gray;
  }
`;

const AddDetailButton = styled.button`
  border: 0;
  background-color: black;
  color: white;
  padding: 1rem;
  border-radius: 6px;
  cursor: pointer;
`;

export default AddDetailPage;

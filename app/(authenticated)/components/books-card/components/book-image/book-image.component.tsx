import { Box, Grow } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import NotAvaibleImage from "@/app/common/components/not-avaible-image/not-avaible-image.component";

type BookImageProps = {
  imageUrl: string;
  id: number;
};

function BookImage({ id, imageUrl }: BookImageProps) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <Link
      href={{
        pathname: "/book-by-id",
        query: { id },
      }}
      passHref
      style={{ textDecoration: "none" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "148px",
          height: "223px",
          position: "relative",
          ":hover": {
            cursor: "pointer",
          },
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {imageUrl === "" || imageUrl === "No image available" ? (
          <NotAvaibleImage />
        ) : (
          <Image
            src={imageUrl}
            alt="book image"
            width={148}
            height={223}
            loading="eager"
          />
        )}
        <Grow in={isHover}>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "white",
              borderRadius: "0 0 4px 4px",
              padding: "4px 0",
              transition: "background-color 0.3s ease",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Ver detalhes
            </p>
          </Box>
        </Grow>
      </Box>
    </Link>
  );
}

export default BookImage;

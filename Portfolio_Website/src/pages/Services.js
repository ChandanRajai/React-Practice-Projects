import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import android from "../images/android.jpg";
import web from "../images/web.jpg";
import python from "../images/python.jpg";

const Services = () => {
  const serviceList = [
    {
      id: 1,
      name: "Android Development",
      imageUrl: android,
    },
    {
      id: 2,
      name: "Web Application Development",
      imageUrl: web,
    },
    {
      id: 3,
      name: "Python Development",
      imageUrl: python,
    },
  ];

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <div className="services">
        <h2>Services</h2>
        <div className="wrapper">
          {serviceList.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, ease: "easeInOut" },
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                <Card>
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;

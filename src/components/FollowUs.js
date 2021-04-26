import React from "react";
import { Instagram, Facebook } from "react-bootstrap-icons";

function FollowUs() {
  return (
    <section id="contact">
      <div
        style={{
          backgroundColor: "white",
          textAlign: "right",
          lineHeight: 1.5,
        }}
      >
        <h1>Kövess minket</h1>
        <div style={{ marginTop: 25, marginBottom: 25 }}>
          <Facebook color="royalblue" className="socialicon" />
          <Instagram color="black" className="socialicon" />
        </div>
        <p style={{ color: "#ce653d" }}>2021 Komposzt Hoszt Szeged</p>
        <p>Minden jog fenntartva.</p>
      </div>
    </section>
  );
}

export default FollowUs;

function Mountain({channel}) {
  console.log(channel);

    const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "24px",
      background: "#f0f4f8",
      fontFamily: "Arial, sans-serif",
    },

    card: {
      width: "100%",
      maxWidth: "430px",
      background: "white",
      borderRadius: "22px",
      overflow: "hidden",
      boxShadow: "0 15px 40px rgba(31, 50, 81, 0.12)",
    },

    image: {
      height: "240px",
      background:
        "linear-gradient(175deg, #8ca6b8 0%, #f6b28b 42%, #f58b55 57%, #34556b 58%, #142f46 100%)",
      display: "flex",
      alignItems: "flex-start",
      padding: "20px",
      color: "white",
      fontSize: "11px",
      fontWeight: "bold",
      letterSpacing: "2px",
    },

    content: {
      padding: "26px",
    },

    category: {
      display: "inline-block",
      background: "#eaf3ff",
      color: "#1769c2",
      padding: "7px 11px",
      borderRadius: "20px",
      fontSize: "10px",
      fontWeight: "bold",
      letterSpacing: "1px",
    },

    heading: {
      color: "#182536",
      fontSize: "27px",
      marginTop: "16px",
      marginBottom: "13px",
    },

    description: {
      color: "#69778b",
      fontSize: "15px",
      lineHeight: "1.8",
    },

    details: {
      display: "flex",
      flexWrap: "wrap",
      gap: "15px",
      marginTop: "22px",
      color: "#69778b",
      fontSize: "12px",
    },

    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "12px",
      marginTop: "28px",
    },

    tag: {
      background: "#e4f6ec",
      color: "#198754",
      borderRadius: "20px",
      padding: "10px 14px",
      fontSize: "13px",
      fontWeight: "bold",
    },

    button: {
      background: "#1760c0",
      color: "white",
      border: "none",
      borderRadius: "10px",
      padding: "13px 17px",
      fontSize: "14px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    }
    
    return (
        <>
            <div style={styles.page}>
                <div style={styles.card}>
        <div style={styles.image}>
         Mountain 
        </div>

        <div style={styles.content}>
          <span style={styles.category}>
            ADVENTURE
          </span>

          <h1 style={styles.heading}>
            Mountain
          </h1>

          <p style={styles.description}>
            Experience the thrill of nature with our
            handpicked mountain trails, breathtaking
            views, and unforgettable adventures.
          </p>

          <div style={styles.details}>
            <span>📍 Himalayas</span>
            <span>⛰️ 5 Days</span>
            <span>⭐ 4.8 (124)</span>
          </div>

          <div style={styles.footer}>
            <span style={styles.tag}>
              Adventure
            </span>

            <button
              style={styles.button}
              onClick={() => alert("Let's start your adventure!")}
            >
              Book Now →
            </button>
          </div>
        </div>
                </div>
            </div>
    

        </>
    )
}

export default Mountain
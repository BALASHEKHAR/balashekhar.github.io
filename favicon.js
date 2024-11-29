function loadFavicons() {
  const favicons = [
    {
      rel: "apple-touch-icon",
      sizes: "57x57",
      href: "images/apple-icon-57x57.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "60x60",
      href: "images/apple-icon-60x60.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "72x72",
      href: "images/apple-icon-72x72.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: "images/apple-icon-76x76.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "114x114",
      href: "images/apple-icon-114x114.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "images/apple-icon-120x120.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "144x144",
      href: "images/apple-icon-144x144.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "152x152",
      href: "images/apple-icon-152x152.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "images/apple-icon-180x180.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "images/android-icon-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "images/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      href: "images/favicon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "images/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "16x16",
      href: "images/favicon-16x16.png",
    },
  ];

  favicons.forEach((favicon) => {
    const link = document.createElement("link");
    link.rel = favicon.rel;
    link.sizes = favicon.sizes;
    if (favicon.type) link.type = favicon.type;
    link.href = favicon.href;
    document.head.appendChild(link);
  });
}

// Call the function when the script loads
loadFavicons();

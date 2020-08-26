const stockList = [
  {
    Symbol: "20MICRONS",
    StockName: "20 Microns Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-OCT-2008",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE144J01027",
    "FACE VALUE": 5
  },
  {
    Symbol: "21STCENMGM",
    StockName: "21st Century Management Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-MAY-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE253B01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "3IINFOTECH",
    StockName: "3i Infotech Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-APR-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE748C01020",
    "FACE VALUE": 10
  },
  {
    Symbol: "3MINDIA",
    StockName: "3M India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-AUG-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE470A01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "3PLAND",
    StockName: "3P Land Holdings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-JUL-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE105C01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "5PAISA",
    StockName: "5Paisa Capital Limited",
    SERIES: "BE",
    "DATE OF LISTING": "16-NOV-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE618L01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "63MOONS",
    StockName: "63 moons technologies limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-JUN-2005",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE111B01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "A2ZINFRA",
    StockName: "A2Z Infra Engineering Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-DEC-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE619I01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "AARTIDRUGS",
    StockName: "Aarti Drugs Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-SEP-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE767A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "AARTIIND",
    StockName: "Aarti Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE769A01020",
    "FACE VALUE": 5
  },
  {
    Symbol: "AARTISURF",
    StockName: "Aarti Surfactants Limited",
    SERIES: "BE",
    "DATE OF LISTING": "14-JUL-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE09EO01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "AARVEEDEN",
    StockName: "Aarvee Denims & Exports Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-NOV-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE273D01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "AARVI",
    StockName: "Aarvi Encon Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-JUN-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE754X01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "AAVAS",
    StockName: "Aavas Financiers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-OCT-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE216P01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "ABAN",
    StockName: "Aban Offshore Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAR-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE421A01028",
    "FACE VALUE": 2
  },
  {
    Symbol: "ABB",
    StockName: "ABB India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE117A01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "ABBOTINDIA",
    StockName: "Abbott India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-JAN-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE358A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "ABCAPITAL",
    StockName: "Aditya Birla Capital Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-SEP-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE674K01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "ABFRL",
    StockName: "Aditya Birla Fashion and Retail Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-JUL-2013",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE647O01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "ABMINTLTD",
    StockName: "ABM International Limited",
    SERIES: "BE",
    "DATE OF LISTING": "14-JUN-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE251C01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "ACC",
    StockName: "ACC Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-NOV-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE012A01025",
    "FACE VALUE": 10
  },
  {
    Symbol: "ACCELYA",
    StockName: "Accelya Solutions India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-DEC-1999",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE793A01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "ACE",
    StockName: "Action Construction Equipment Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-SEP-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE731H01025",
    "FACE VALUE": 2
  },
  {
    Symbol: "ADANIENT",
    StockName: "Adani Enterprises Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-JUN-1997",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE423A01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "ADANIGAS",
    StockName: "Adani Gas Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-NOV-2018",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE399L01023",
    "FACE VALUE": 1
  },
  {
    Symbol: "ADANIGREEN",
    StockName: "Adani Green Energy Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-JUN-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE364U01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "ADANIPORTS",
    StockName: "Adani Ports and Special Economic Zone Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-NOV-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE742F01042",
    "FACE VALUE": 2
  },
  {
    Symbol: "ADANIPOWER",
    StockName: "Adani Power Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-AUG-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE814H01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "ADANITRANS",
    StockName: "Adani Transmission Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-JUL-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE931S01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "ADFFOODS",
    StockName: "ADF Foods Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-SEP-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE982B01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "ADHUNIKIND",
    StockName: "Adhunik Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-JUL-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE452L01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "ADORWELD",
    StockName: "Ador Welding Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAY-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE045A01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "ADROITINFO",
    StockName: "Adroit Infotech Limited",
    SERIES: "BE",
    "DATE OF LISTING": "13-AUG-1997",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE737B01033",
    "FACE VALUE": 10
  },
  {
    Symbol: "ADSL",
    StockName: "Allied Digital Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-JUL-2007",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE102I01027",
    "FACE VALUE": 5
  },
  {
    Symbol: "ADVANIHOTR",
    StockName: "Advani Hotels & Resorts (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-JUN-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE199C01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "ADVENZYMES",
    StockName: "Advanced Enzyme Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-AUG-2016",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE837H01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "AEGISCHEM",
    StockName: "Aegis Logistics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-APR-1996",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE208C01025",
    "FACE VALUE": 1
  },
  {
    Symbol: "AFFLE",
    StockName: "Affle (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-AUG-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE00WC01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "AGARIND",
    StockName: "Agarwal Industrial Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-MAY-2014",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE204E01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "AGCNET",
    StockName: "AGC Networks Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-JUL-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE676A01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "AGRITECH",
    StockName: "Agri-Tech (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JAN-2014",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE449G01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "AGROPHOS",
    StockName: "Agro Phos India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-MAR-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE740V01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "AHLEAST",
    StockName: "Asian Hotels (East) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-AUG-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE926K01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "AHLUCONT",
    StockName: "Ahluwalia Contracts (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-DEC-2009",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE758C01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "AHLWEST",
    StockName: "Asian Hotels (West) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-AUG-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE915K01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "AIAENG",
    StockName: "AIA Engineering Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-DEC-2005",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE212H01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "AIONJSW",
    StockName: "Monnet Ispat & Energy Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-SEP-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE743C01021",
    "FACE VALUE": 10
  },
  {
    Symbol: "AIRAN",
    StockName: "Airan Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-MAY-2019",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE645W01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "AJANTPHARM",
    StockName: "Ajanta Pharma Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAY-2000",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE031B01049",
    "FACE VALUE": 2
  },
  {
    Symbol: "AJMERA",
    StockName: "Ajmera Realty & Infra India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-JUN-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE298G01027",
    "FACE VALUE": 10
  },
  {
    Symbol: "AKASH",
    StockName: "Akash Infra-Projects Limited",
    SERIES: "BE",
    "DATE OF LISTING": "11-OCT-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE737W01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "AKSHARCHEM",
    StockName: "AksharChem India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-MAR-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE542B01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "AKSHOPTFBR",
    StockName: "Aksh Optifibre Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-AUG-2000",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE523B01011",
    "FACE VALUE": 5
  },
  {
    Symbol: "AKZOINDIA",
    StockName: "Akzo Nobel India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUN-2001",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE133A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "ALANKIT",
    StockName: "Alankit Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-JUN-2015",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE914E01040",
    "FACE VALUE": 1
  },
  {
    Symbol: "ALBERTDAVD",
    StockName: "Albert David Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-JUN-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE155C01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "ALCHEM",
    StockName: "Alchemist Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-JUL-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE964B01033",
    "FACE VALUE": 10
  },
  {
    Symbol: "ALEMBICLTD",
    StockName: "Alembic Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-SEP-1999",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE426A01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "ALICON",
    StockName: "Alicon Castalloy Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-SEP-2006",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE062D01024",
    "FACE VALUE": 5
  },
  {
    Symbol: "ALKALI",
    StockName: "Alkali Metals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-NOV-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE773I01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "ALKEM",
    StockName: "Alkem Laboratories Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-DEC-2015",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE540L01014",
    "FACE VALUE": 2
  },
  {
    Symbol: "ALKYLAMINE",
    StockName: "Alkyl Amines Chemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-NOV-2007",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE150B01021",
    "FACE VALUE": 5
  },
  {
    Symbol: "ALLCARGO",
    StockName: "Allcargo Logistics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-JUN-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE418H01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "ALLSEC",
    StockName: "Allsec Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAY-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE835G01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "ALMONDZ",
    StockName: "Almondz Global Securities Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-JUN-2008",
    "PAID UP VALUE": 6,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE326B01027",
    "FACE VALUE": 6
  },
  {
    Symbol: "ALOKINDS",
    StockName: "Alok Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-FEB-2020",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE270A01029",
    "FACE VALUE": 1
  },
  {
    Symbol: "ALPA",
    StockName: "Alpa Laboratories Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-AUG-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE385I01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "ALPHAGEO",
    StockName: "Alphageo (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-MAY-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE137C01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "ALPSINDUS",
    StockName: "Alps Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-APR-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE093B01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "AMARAJABAT",
    StockName: "Amara Raja Batteries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-SEP-2003",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE885A01032",
    "FACE VALUE": 1
  },
  {
    Symbol: "AMBER",
    StockName: "Amber Enterprises India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-JAN-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE371P01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "AMBIKCO",
    StockName: "Ambika Cotton Mills Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-JAN-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE540G01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "AMBUJACEM",
    StockName: "Ambuja Cements Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-FEB-1998",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE079A01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "AMDIND",
    StockName: "AMD Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-MAR-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE005I01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "AMJLAND",
    StockName: "Amj Land Holdings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE606A01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "AMRUTANJAN",
    StockName: "Amrutanjan Health Care Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-JAN-2015",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE098F01031",
    "FACE VALUE": 1
  },
  {
    Symbol: "ANANTRAJ",
    StockName: "Anant Raj Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-SEP-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE242C01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "ANDHRACEMT",
    StockName: "Andhra Cements Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-NOV-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE666E01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "ANDHRAPAP",
    StockName: "ANDHRA PAPER LIMITED",
    SERIES: "EQ",
    "DATE OF LISTING": "13-MAY-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE435A01028",
    "FACE VALUE": 10
  },
  {
    Symbol: "ANDHRSUGAR",
    StockName: "The Andhra Sugars Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-NOV-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE715B01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "ANIKINDS",
    StockName: "Anik Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-MAY-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE087B01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "ANKITMETAL",
    StockName: "Ankit Metal & Power Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-MAR-2013",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE106I01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "ANSALAPI",
    StockName: "Ansal Properties & Infrastructure Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-JAN-2006",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE436A01026",
    "FACE VALUE": 5
  },
  {
    Symbol: "ANSALHSG",
    StockName: "Ansal Housing Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-OCT-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE880B01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "ANUP",
    StockName: "The Anup Engineering Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-MAR-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE294Z01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "APARINDS",
    StockName: "Apar Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-JUL-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE372A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "APCL",
    StockName: "Anjani Portland Cement Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-APR-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE071F01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "APCOTEXIND",
    StockName: "Apcotex Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-SEP-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE116A01032",
    "FACE VALUE": 2
  },
  {
    Symbol: "APEX",
    StockName: "Apex Frozen Foods Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-SEP-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE346W01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "APLAPOLLO",
    StockName: "APL Apollo Tubes Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-DEC-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE702C01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "APLLTD",
    StockName: "Alembic Pharmaceuticals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-SEP-2011",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE901L01018",
    "FACE VALUE": 2
  },
  {
    Symbol: "APOLLO",
    StockName: "Apollo Micro Systems Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-JAN-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE713T01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "APOLLOHOSP",
    StockName: "Apollo Hospitals Enterprise Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-JAN-1996",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE437A01024",
    "FACE VALUE": 5
  },
  {
    Symbol: "APOLLOPIPE",
    StockName: "Apollo Pipes Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-NOV-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE126J01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "APOLLOTYRE",
    StockName: "Apollo Tyres Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-MAY-1995",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE438A01022",
    "FACE VALUE": 1
  },
  {
    Symbol: "APOLSINHOT",
    StockName: "Apollo Sindoori Hotels Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JAN-2015",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE451F01024",
    "FACE VALUE": 5
  },
  {
    Symbol: "APTECHT",
    StockName: "Aptech Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-SEP-2002",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE266F01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "ARCHIDPLY",
    StockName: "Archidply Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-JUL-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE877I01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "ARCHIES",
    StockName: "Archies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-SEP-1998",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE731A01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "ARCOTECH",
    StockName: "Arcotech Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-APR-2014",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE574I01035",
    "FACE VALUE": 2
  },
  {
    Symbol: "ARENTERP",
    StockName: "Rajdarshan Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-OCT-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE610C01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "ARIES",
    StockName: "Aries Agro Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-JAN-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE298I01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "ARIHANT",
    StockName: "Arihant Foundations & Housing Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-DEC-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE413D01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "ARIHANTSUP",
    StockName: "Arihant Superstructures Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-MAR-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE643K01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "ARMANFIN",
    StockName: "Arman Financial Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-JUN-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE109C01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "AROGRANITE",
    StockName: "Aro Granite Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-APR-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE210C01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "ARROWGREEN",
    StockName: "Arrow Greentech Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-MAY-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE570D01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "ARSHIYA",
    StockName: "Arshiya Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-DEC-2009",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE968D01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "ARSSINFRA",
    StockName: "ARSS Infrastructure Projects Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-MAR-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE267I01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "ARTEMISMED",
    StockName: "Artemis Medicare Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-JAN-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE025R01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "ARVIND",
    StockName: "Arvind Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE034A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "ARVINDFASN",
    StockName: "Arvind Fashions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-MAR-2019",
    "PAID UP VALUE": 4,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE955V01021",
    "FACE VALUE": 4
  },
  {
    Symbol: "ARVSMART",
    StockName: "Arvind SmartSpaces Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-AUG-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE034S01021",
    "FACE VALUE": 10
  },
  {
    Symbol: "ASAHIINDIA",
    StockName: "Asahi India Glass Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-MAR-1998",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE439A01020",
    "FACE VALUE": 1
  },
  {
    Symbol: "ASAHISONG",
    StockName: "Asahi Songwon Colors Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-AUG-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE228I01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "ASAL",
    StockName: "Automotive Stampings and Assemblies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-MAR-2002",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE900C01027",
    "FACE VALUE": 10
  },
  {
    Symbol: "ASALCBR",
    StockName: "Associated Alcohols & Breweries Ltd.",
    SERIES: "EQ",
    "DATE OF LISTING": "12-FEB-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE073G01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "ASHAPURMIN",
    StockName: "Ashapura Minechem Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-SEP-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE348A01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "ASHIANA",
    StockName: "Ashiana Housing Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-JUN-2011",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE365D01021",
    "FACE VALUE": 2
  },
  {
    Symbol: "ASHIMASYN",
    StockName: "Ashima Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-JUL-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE440A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "ASHOKA",
    StockName: "Ashoka Buildcon Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-OCT-2010",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE442H01029",
    "FACE VALUE": 5
  },
  {
    Symbol: "ASHOKLEY",
    StockName: "Ashok Leyland Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-MAY-1995",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE208A01029",
    "FACE VALUE": 1
  },
  {
    Symbol: "ASIANHOTNR",
    StockName: "Asian Hotels (North) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-APR-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE363A01022",
    "FACE VALUE": 10
  },
  {
    Symbol: "ASIANPAINT",
    StockName: "Asian Paints Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-MAY-1995",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE021A01026",
    "FACE VALUE": 1
  },
  {
    Symbol: "ASIANTILES",
    StockName: "Asian Granito India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-AUG-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE022I01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "ASPINWALL",
    StockName: "Aspinwall and Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-JUN-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE991I01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "ASTEC",
    StockName: "Astec LifeSciences Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-NOV-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE563J01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "ASTERDM",
    StockName: "Aster DM Healthcare Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-FEB-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE914M01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "ASTRAL",
    StockName: "Astral Poly Technik Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-MAR-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE006I01046",
    "FACE VALUE": 1
  },
  {
    Symbol: "ASTRAMICRO",
    StockName: "Astra Microwave Products Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-NOV-2004",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE386C01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "ASTRAZEN",
    StockName: "AstraZeneca Pharma India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-MAY-2001",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE203A01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "ASTRON",
    StockName: "Astron Paper & Board Mill Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-DEC-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE646X01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "ATFL",
    StockName: "Agro Tech Foods Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-DEC-2002",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE209A01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "ATLANTA",
    StockName: "Atlanta  Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-SEP-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE285H01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "ATLASCYCLE",
    StockName: "Atlas Cycles (Haryana) Limited",
    SERIES: "BE",
    "DATE OF LISTING": "23-OCT-1996",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE446A01025",
    "FACE VALUE": 5
  },
  {
    Symbol: "ATNINTER",
    StockName: "ATN International Limited",
    SERIES: "BE",
    "DATE OF LISTING": "01-SEP-2006",
    "PAID UP VALUE": 4,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE803A01027",
    "FACE VALUE": 4
  },
  {
    Symbol: "ATUL",
    StockName: "Atul Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-MAY-1998",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE100A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "ATULAUTO",
    StockName: "Atul Auto Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-JUN-2013",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE951D01028",
    "FACE VALUE": 5
  },
  {
    Symbol: "AUBANK",
    StockName: "AU Small Finance Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-JUL-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE949L01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "AURIONPRO",
    StockName: "Aurionpro Solutions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-OCT-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE132H01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "AUROPHARMA",
    StockName: "Aurobindo Pharma Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-JUL-2000",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE406A01037",
    "FACE VALUE": 1
  },
  {
    Symbol: "AUSOMENT",
    StockName: "Ausom Enterprise Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-APR-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE218C01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "AUTOAXLES",
    StockName: "Automotive Axles Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAY-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE449A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "AUTOIND",
    StockName: "Autoline Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-JAN-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE718H01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "AUTOLITIND",
    StockName: "Autolite (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-MAY-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE448A01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "AVADHSUGAR",
    StockName: "Avadh Sugar & Energy Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUL-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE349W01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "AVANTIFEED",
    StockName: "Avanti Feeds Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-APR-2015",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE871C01038",
    "FACE VALUE": 1
  },
  {
    Symbol: "AVTNPL",
    StockName: "AVT Natural Products Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-JAN-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE488D01021",
    "FACE VALUE": 1
  },
  {
    Symbol: "AXISBANK",
    StockName: "Axis Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-NOV-1998",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE238A01034",
    "FACE VALUE": 2
  },
  {
    Symbol: "AXISCADES",
    StockName: "AXISCADES Engineering Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-DEC-2000",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE555B01013",
    "FACE VALUE": 5
  },
  {
    Symbol: "AYMSYNTEX",
    StockName: "AYM Syntex Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-AUG-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE193B01039",
    "FACE VALUE": 10
  },
  {
    Symbol: "BAFNAPH",
    StockName: "Bafna Pharmaceuticals Limited",
    SERIES: "BE",
    "DATE OF LISTING": "27-FEB-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE878I01022",
    "FACE VALUE": 10
  },
  {
    Symbol: "BAGFILMS",
    StockName: "B.A.G Films and Media Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-OCT-2003",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE116D01028",
    "FACE VALUE": 2
  },
  {
    Symbol: "BAJAJ-AUTO",
    StockName: "Bajaj Auto Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-MAY-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE917I01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "BAJAJCON",
    StockName: "Bajaj Consumer Care Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-AUG-2010",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE933K01021",
    "FACE VALUE": 1
  },
  {
    Symbol: "BAJAJELEC",
    StockName: "Bajaj Electricals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-NOV-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE193E01025",
    "FACE VALUE": 2
  },
  {
    Symbol: "BAJAJFINSV",
    StockName: "Bajaj Finserv Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-MAY-2008",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE918I01018",
    "FACE VALUE": 5
  },
  {
    Symbol: "BAJAJHIND",
    StockName: "Bajaj Hindusthan Sugar Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAY-1995",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE306A01021",
    "FACE VALUE": 1
  },
  {
    Symbol: "BAJAJHLDNG",
    StockName: "Bajaj Holdings & Investment Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-MAR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE118A01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "BAJFINANCE",
    StockName: "Bajaj Finance Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-APR-2003",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE296A01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "BALAJITELE",
    StockName: "Balaji Telefilms Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-NOV-2000",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE794B01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "BALAMINES",
    StockName: "Balaji Amines Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-APR-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE050E01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "BALAXI",
    StockName: "Balaxi Ventures Limited",
    SERIES: "BE",
    "DATE OF LISTING": "30-NOV-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE618N01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "BALKRISHNA",
    StockName: "Balkrishna Paper Mills Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUL-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE875R01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "BALKRISIND",
    StockName: "Balkrishna Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-JAN-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE787D01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "BALLARPUR",
    StockName: "Ballarpur Industries Limited",
    SERIES: "BE",
    "DATE OF LISTING": "31-MAR-2008",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE294A01037",
    "FACE VALUE": 2
  },
  {
    Symbol: "BALMLAWRIE",
    StockName: "Balmer Lawrie & Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-JUL-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE164A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "BALPHARMA",
    StockName: "Bal Pharma Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-MAY-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE083D01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "BALRAMCHIN",
    StockName: "Balrampur Chini Mills Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE119A01028",
    "FACE VALUE": 1
  },
  {
    Symbol: "BANARBEADS",
    StockName: "Banaras Beads Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-JUL-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 100,
    "ISIN NUMBER": "INE655B01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "BANARISUG",
    StockName: "Bannari Amman Sugars Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-MAY-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE459A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "BANCOINDIA",
    StockName: "Banco Products (I) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-DEC-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE213C01025",
    "FACE VALUE": 2
  },
  {
    Symbol: "BANDHANBNK",
    StockName: "Bandhan Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-MAR-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE545U01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "BANG",
    StockName: "Bang Overseas Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-FEB-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE863I01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "BANKBARODA",
    StockName: "Bank of Baroda",
    SERIES: "EQ",
    "DATE OF LISTING": "19-FEB-1997",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE028A01039",
    "FACE VALUE": 2
  },
  {
    Symbol: "BANKINDIA",
    StockName: "Bank of India",
    SERIES: "EQ",
    "DATE OF LISTING": "30-APR-1997",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE084A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "BANSWRAS",
    StockName: "Banswara Syntex Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-APR-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE629D01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "BARTRONICS",
    StockName: "Bartronics India Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "12-JAN-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE855F01034",
    "FACE VALUE": 10
  },
  {
    Symbol: "BASF",
    StockName: "BASF India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-MAY-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE373A01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "BASML",
    StockName: "Bannari Amman Spinning Mills Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-NOV-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE186H01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "BATAINDIA",
    StockName: "Bata India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-JUN-2003",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE176A01028",
    "FACE VALUE": 5
  },
  {
    Symbol: "BAYERCROP",
    StockName: "Bayer Cropscience Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-JAN-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE462A01022",
    "FACE VALUE": 10
  },
  {
    Symbol: "BBL",
    StockName: "Bharat Bijlee Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-NOV-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE464A01028",
    "FACE VALUE": 10
  },
  {
    Symbol: "BBTC",
    StockName: "Bombay Burmah Trading Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-APR-1996",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE050A01025",
    "FACE VALUE": 2
  },
  {
    Symbol: "BCG",
    StockName: "Brightcom Group Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-MAY-2015",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE425B01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "BCP",
    StockName: "B.C. Power Controls Ltd",
    SERIES: "EQ",
    "DATE OF LISTING": "19-AUG-2019",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE905P01028",
    "FACE VALUE": 2
  },
  {
    Symbol: "BDL",
    StockName: "Bharat Dynamics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-MAR-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE171Z01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "BEARDSELL",
    StockName: "Beardsell Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-JAN-2015",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE520H01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "BEDMUTHA",
    StockName: "Bedmutha Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-OCT-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE844K01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "BEL",
    StockName: "Bharat Electronics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-JUL-2000",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE263A01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "BEML",
    StockName: "BEML Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-NOV-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE258A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "BEPL",
    StockName: "Bhansali Engineering Polymers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-MAR-2005",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE922A01025",
    "FACE VALUE": 1
  },
  {
    Symbol: "BERGEPAINT",
    StockName: "Berger Paints (I) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-NOV-1999",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE463A01038",
    "FACE VALUE": 1
  },
  {
    Symbol: "BFINVEST",
    StockName: "BF Investment Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-JAN-2011",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE878K01010",
    "FACE VALUE": 5
  },
  {
    Symbol: "BFUTILITIE",
    StockName: "BF Utilities Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-MAY-2007",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE243D01012",
    "FACE VALUE": 5
  },
  {
    Symbol: "BGRENERGY",
    StockName: "BGR Energy Systems Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-JAN-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE661I01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "BHAGERIA",
    StockName: "Bhageria Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-MAR-2016",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE354C01027",
    "FACE VALUE": 5
  },
  {
    Symbol: "BHAGYANGR",
    StockName: "Bhagyanagar India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-MAY-2017",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE458B01036",
    "FACE VALUE": 2
  },
  {
    Symbol: "BHAGYAPROP",
    StockName: "Bhagyanagar Properties Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-JUL-2017",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE363W01018",
    "FACE VALUE": 2
  },
  {
    Symbol: "BHANDARI",
    StockName: "Bhandari Hosiery Exports Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-JAN-2017",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE474E01029",
    "FACE VALUE": 1
  },
  {
    Symbol: "BHARATFORG",
    StockName: "Bharat Forge Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-APR-2003",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE465A01025",
    "FACE VALUE": 2
  },
  {
    Symbol: "BHARATGEAR",
    StockName: "Bharat Gears Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-APR-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE561C01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "BHARATRAS",
    StockName: "Bharat Rasayan Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-OCT-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE838B01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "BHARATWIRE",
    StockName: "Bharat Wire Ropes Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-APR-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE316L01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "BHARTIARTL",
    StockName: "Bharti Airtel Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-FEB-2002",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE397D01024",
    "FACE VALUE": 5
  },
  {
    Symbol: "BHEL",
    StockName: "Bharat Heavy Electricals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-NOV-2003",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE257A01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "BIGBLOC",
    StockName: "Bigbloc Construction Limited",
    SERIES: "BE",
    "DATE OF LISTING": "02-SEP-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE412U01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "BIL",
    StockName: "Bhartiya International Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-APR-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE828A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "BILENERGY",
    StockName: "Bil Energy Systems Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-FEB-2011",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE607L01029",
    "FACE VALUE": 1
  },
  {
    Symbol: "BINDALAGRO",
    StockName: "Oswal Chemicals & Fertilizers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-AUG-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE143A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "BIOCON",
    StockName: "Biocon Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-APR-2004",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE376G01013",
    "FACE VALUE": 5
  },
  {
    Symbol: "BIOFILCHEM",
    StockName: "Biofil Chemicals & Pharmaceuticals Limited",
    SERIES: "BE",
    "DATE OF LISTING": "12-JUN-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE829A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "BIRLACABLE",
    StockName: "Birla Cable Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-DEC-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE800A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "BIRLACORPN",
    StockName: "Birla Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-APR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE340A01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "BIRLAMONEY",
    StockName: "Aditya Birla Money Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-FEB-2008",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE865C01022",
    "FACE VALUE": 1
  },
  {
    Symbol: "BIRLATYRE",
    StockName: "Birla Tyres Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-FEB-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE0AEJ01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "BKMINDST",
    StockName: "Bkm Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-MAR-2015",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE831Q01016",
    "FACE VALUE": 1
  },
  {
    Symbol: "BLBLIMITED",
    StockName: "BLB Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-MAY-2000",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE791A01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "BLISSGVS",
    StockName: "Bliss GVS Pharma Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-JUL-2010",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE416D01022",
    "FACE VALUE": 1
  },
  {
    Symbol: "BLKASHYAP",
    StockName: "B. L. Kashyap and Sons Limited",
    SERIES: "BE",
    "DATE OF LISTING": "17-MAR-2006",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE350H01032",
    "FACE VALUE": 1
  },
  {
    Symbol: "BLS",
    StockName: "BLS International Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-JUN-2016",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE153T01027",
    "FACE VALUE": 1
  },
  {
    Symbol: "BLUEBLENDS",
    StockName: "Blue Blends (I) Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE113O01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "BLUECHIP",
    StockName: "Blue Chip India Limited",
    SERIES: "BE",
    "DATE OF LISTING": "12-MAR-1997",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE657B01025",
    "FACE VALUE": 2
  },
  {
    Symbol: "BLUECOAST",
    StockName: "Blue Coast Hotels Limited",
    SERIES: "BE",
    "DATE OF LISTING": "16-FEB-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE472B01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "BLUEDART",
    StockName: "Blue Dart Express Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-DEC-2002",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE233B01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "BLUESTARCO",
    StockName: "Blue Star Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-JUN-2000",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE472A01039",
    "FACE VALUE": 2
  },
  {
    Symbol: "BODALCHEM",
    StockName: "Bodal Chemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-AUG-2011",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE338D01028",
    "FACE VALUE": 2
  },
  {
    Symbol: "BOMDYEING",
    StockName: "Bombay Dyeing & Mfg Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-APR-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE032A01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "BOROLTD",
    StockName: "Borosil Limited",
    SERIES: "BE",
    "DATE OF LISTING": "22-JUL-2020",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE02PY01013",
    "FACE VALUE": 1
  },
  {
    Symbol: "BORORENEW",
    StockName: "BOROSIL RENEWABLES LIMITED",
    SERIES: "EQ",
    "DATE OF LISTING": "25-MAY-2018",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE666D01022",
    "FACE VALUE": 1
  },
  {
    Symbol: "BOSCHLTD",
    StockName: "Bosch Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-MAY-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE323A01026",
    "FACE VALUE": 10
  },
  {
    Symbol: "BPCL",
    StockName: "Bharat Petroleum Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-SEP-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE029A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "BPL",
    StockName: "BPL Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-JUN-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE110A01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "BRFL",
    StockName: "Bombay Rayon Fashions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-DEC-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE589G01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "BRIGADE",
    StockName: "Brigade Enterprises Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-DEC-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE791I01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "BRITANNIA",
    StockName: "Britannia Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-NOV-1998",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE216A01030",
    "FACE VALUE": 1
  },
  {
    Symbol: "BRNL",
    StockName: "Bharat Road Network Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-SEP-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE727S01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "BROOKS",
    StockName: "Brooks Laboratories Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-SEP-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE650L01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "BSE",
    StockName: "BSE Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-FEB-2017",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE118H01025",
    "FACE VALUE": 2
  },
  {
    Symbol: "BSELINFRA",
    StockName: "BSEL Infrastructure Realty Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-FEB-2001",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE395A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "BSL",
    StockName: "BSL Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-JUL-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE594B01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "BSOFT",
    StockName: "BIRLASOFT LIMITED",
    SERIES: "EQ",
    "DATE OF LISTING": "24-NOV-1999",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE836A01035",
    "FACE VALUE": 2
  },
  {
    Symbol: "BURNPUR",
    StockName: "Burnpur Cement Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-JAN-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE817H01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "BUTTERFLY",
    StockName: "Butterfly Gandhimathi Appliances Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-APR-2014",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE295F01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "BVCL",
    StockName: "Barak Valley Cements Limited",
    SERIES: "BE",
    "DATE OF LISTING": "23-NOV-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE139I01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "BYKE",
    StockName: "The Byke Hospitality Ltd",
    SERIES: "EQ",
    "DATE OF LISTING": "15-APR-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE319B01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "CADILAHC",
    StockName: "Cadila Healthcare Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-APR-2000",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE010B01027",
    "FACE VALUE": 1
  },
  {
    Symbol: "CALSOFT",
    StockName: "California Software Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUN-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE526B01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "CAMLINFINE",
    StockName: "Camlin Fine Sciences Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-JAN-2015",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE052I01032",
    "FACE VALUE": 1
  },
  {
    Symbol: "CANBK",
    StockName: "Canara Bank",
    SERIES: "EQ",
    "DATE OF LISTING": "23-DEC-2002",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE476A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "CANDC",
    StockName: "C & C Constructions Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "26-FEB-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE874H01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "CANFINHOME",
    StockName: "Can Fin Homes Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAY-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE477A01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "CANTABIL",
    StockName: "Cantabil Retail India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-OCT-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE068L01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "CAPACITE",
    StockName: "Capacit'e Infraprojects Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-SEP-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE264T01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "CAPLIPOINT",
    StockName: "Caplin Point Laboratories Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-JUN-2014",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE475E01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "CAPTRUST",
    StockName: "Capital Trust Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-JAN-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE707C01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "CARBORUNIV",
    StockName: "Carborundum Universal Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-APR-1996",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE120A01034",
    "FACE VALUE": 1
  },
  {
    Symbol: "CAREERP",
    StockName: "Career Point Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-OCT-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE521J01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "CARERATING",
    StockName: "CARE Ratings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-DEC-2012",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE752H01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "CASTEXTECH",
    StockName: "Castex Technologies Limited",
    SERIES: "BE",
    "DATE OF LISTING": "27-JUN-2005",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE068D01021",
    "FACE VALUE": 2
  },
  {
    Symbol: "CASTROLIND",
    StockName: "Castrol India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-MAR-2014",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE172A01027",
    "FACE VALUE": 5
  },
  {
    Symbol: "CCCL",
    StockName: "Consolidated Construction Consortium Limited",
    SERIES: "BE",
    "DATE OF LISTING": "15-OCT-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE429I01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "CCHHL",
    StockName: "Country Club Hospitality & Holidays Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-FEB-2015",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE652F01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "CCL",
    StockName: "CCL Products (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-JUN-2004",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE421D01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "CDSL",
    StockName: "Central Depository Services (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-JUN-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE736A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "CEATLTD",
    StockName: "CEAT Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-FEB-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE482A01020",
    "FACE VALUE": 10
  },
  {
    Symbol: "CEBBCO",
    StockName: "Commercial Engineers & Body Builders Co Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-OCT-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE209L01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "CELEBRITY",
    StockName: "Celebrity Fashions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-JAN-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE185H01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "CENTENKA",
    StockName: "Century Enka Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAY-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE485A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "CENTEXT",
    StockName: "Century Extrusions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-JUL-2004",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE281A01026",
    "FACE VALUE": 1
  },
  {
    Symbol: "CENTRALBK",
    StockName: "Central Bank of India",
    SERIES: "EQ",
    "DATE OF LISTING": "21-AUG-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE483A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "CENTRUM",
    StockName: "Centrum Capital Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-APR-2018",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE660C01027",
    "FACE VALUE": 1
  },
  {
    Symbol: "CENTUM",
    StockName: "Centum Electronics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-OCT-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE320B01020",
    "FACE VALUE": 10
  },
  {
    Symbol: "CENTURYPLY",
    StockName: "Century Plyboards (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-MAR-2006",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE348B01021",
    "FACE VALUE": 1
  },
  {
    Symbol: "CENTURYTEX",
    StockName: "Century Textiles & Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-JUN-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE055A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "CERA",
    StockName: "Cera Sanitaryware Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-NOV-2007",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE739E01017",
    "FACE VALUE": 5
  },
  {
    Symbol: "CEREBRAINT",
    StockName: "Cerebra Integrated Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-JUN-2013",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE345B01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "CESC",
    StockName: "CESC Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE486A01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "CESCVENT",
    StockName: "CESC Ventures Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-JAN-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE425Y01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "CGCL",
    StockName: "Capri Global Capital Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-OCT-2010",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE180C01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "CGPOWER",
    StockName: "CG Power and Industrial Solutions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-MAR-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE067A01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "CHALET",
    StockName: "Chalet Hotels Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-FEB-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE427F01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "CHAMBLFERT",
    StockName: "Chambal Fertilizers & Chemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-JUN-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE085A01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "CHEMBOND",
    StockName: "Chembond Chemicals Ltd",
    SERIES: "EQ",
    "DATE OF LISTING": "20-NOV-2019",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE995D01025",
    "FACE VALUE": 5
  },
  {
    Symbol: "CHEMFAB",
    StockName: "Chemfab Alkalis Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-APR-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE783X01023",
    "FACE VALUE": 10
  },
  {
    Symbol: "CHENNPETRO",
    StockName: "Chennai Petroleum Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-JUN-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE178A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "CHOLAFIN",
    StockName: "Cholamandalam Investment and Finance Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-MAY-1996",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE121A01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "CHOLAHLDNG",
    StockName: "Cholamandalam Financial Holdings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-SEP-2017",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE149A01033",
    "FACE VALUE": 1
  },
  {
    Symbol: "CHROMATIC",
    StockName: "Chromatic India Limited",
    SERIES: "BE",
    "DATE OF LISTING": "29-MAY-2012",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE662C01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "CIGNITITEC",
    StockName: "Cigniti Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-OCT-2014",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE675C01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "CIMMCO",
    StockName: "Cimmco Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-SEP-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE184C01028",
    "FACE VALUE": 10
  },
  {
    Symbol: "CINELINE",
    StockName: "Cineline India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-JUN-2012",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE704H01022",
    "FACE VALUE": 5
  },
  {
    Symbol: "CINEVISTA",
    StockName: "Cinevista Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-MAY-2000",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE039B01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "CIPLA",
    StockName: "Cipla Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE059A01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "CKFSL",
    StockName: "Cox & Kings Financial Service Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "11-APR-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE391Z01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "CLEDUCATE",
    StockName: "CL Educate Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-MAR-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE201M01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "CLNINDIA",
    StockName: "Clariant Chemicals (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-JUN-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE492A01029",
    "FACE VALUE": 10
  },
  {
    Symbol: "CMICABLES",
    StockName: "CMI Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-NOV-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE981B01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "CNOVAPETRO",
    StockName: "CIL Nova Petrochemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-JAN-2014",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE672K01025",
    "FACE VALUE": 10
  },
  {
    Symbol: "COALINDIA",
    StockName: "Coal India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-NOV-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE522F01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "COCHINSHIP",
    StockName: "Cochin Shipyard Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-AUG-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE704P01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "COFFEEDAY",
    StockName: "Coffee Day Enterprises Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "02-NOV-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE335K01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "COFORGE",
    StockName: "Coforge Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-AUG-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE591G01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "COLPAL",
    StockName: "Colgate Palmolive (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-DEC-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE259A01022",
    "FACE VALUE": 1
  },
  {
    Symbol: "COMPINFO",
    StockName: "Compuage Infocom Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-JUL-2016",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE070C01037",
    "FACE VALUE": 2
  },
  {
    Symbol: "COMPUSOFT",
    StockName: "Compucom Software Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-MAR-2012",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE453B01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "CONCOR",
    StockName: "Container Corporation of India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-MAY-1997",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE111A01025",
    "FACE VALUE": 5
  },
  {
    Symbol: "CONFIPET",
    StockName: "Confidence Petroleum India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-JUN-2019",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE552D01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "CONSOFINVT",
    StockName: "Consolidated Finvest & Holdings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAR-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE025A01027",
    "FACE VALUE": 10
  },
  {
    Symbol: "CONTROLPR",
    StockName: "Control Print Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-JUN-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE663B01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "CORALFINAC",
    StockName: "Coral India Finance & Housing Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-MAR-1996",
    "PAID UP VALUE": 2,
    "MARKET LOT": 100,
    "ISIN NUMBER": "INE558D01021",
    "FACE VALUE": 2
  },
  {
    Symbol: "CORDSCABLE",
    StockName: "Cords Cable Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-FEB-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE792I01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "COROMANDEL",
    StockName: "Coromandel International Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-MAY-1995",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE169A01031",
    "FACE VALUE": 1
  },
  {
    Symbol: "COSMOFILMS",
    StockName: "Cosmo Films Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-MAY-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE757A01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "COUNCODOS",
    StockName: "Country Condo's Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-JAN-2009",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE695B01025",
    "FACE VALUE": 1
  },
  {
    Symbol: "COX&KINGS",
    StockName: "Cox & Kings Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "11-DEC-2009",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE008I01026",
    "FACE VALUE": 5
  },
  {
    Symbol: "CREATIVE",
    StockName: "Creative Peripherals and Distribution Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-AUG-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE985W01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "CREATIVEYE",
    StockName: "Creative Eye Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-DEC-2000",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE230B01021",
    "FACE VALUE": 5
  },
  {
    Symbol: "CREDITACC",
    StockName: "CREDITACCESS GRAMEEN LIMITED",
    SERIES: "EQ",
    "DATE OF LISTING": "23-AUG-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE741K01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "CREST",
    StockName: "Crest Ventures Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-DEC-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE559D01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "CRISIL",
    StockName: "CRISIL Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUN-1995",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE007A01025",
    "FACE VALUE": 1
  },
  {
    Symbol: "CROMPTON",
    StockName: "Crompton Greaves Consumer Electricals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-MAY-2016",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE299U01018",
    "FACE VALUE": 2
  },
  {
    Symbol: "CSBBANK",
    StockName: "CSB Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-DEC-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE679A01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "CTE",
    StockName: "Cambridge Technology Enterprises Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-FEB-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE627H01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "CUB",
    StockName: "City Union Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-AUG-1998",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE491A01021",
    "FACE VALUE": 1
  },
  {
    Symbol: "CUBEXTUB",
    StockName: "Cubex Tubings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-APR-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE144D01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "CUMMINSIND",
    StockName: "Cummins India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAR-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE298A01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "CUPID",
    StockName: "Cupid Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-SEP-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE509F01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "CYBERTECH",
    StockName: "Cybertech Systems And Software Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-JAN-1999",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE214A01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "CYIENT",
    StockName: "Cyient Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-SEP-1998",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE136B01020",
    "FACE VALUE": 5
  },
  {
    Symbol: "DAAWAT",
    StockName: "LT Foods Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-DEC-2006",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE818H01020",
    "FACE VALUE": 1
  },
  {
    Symbol: "DABUR",
    StockName: "Dabur India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-APR-1999",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE016A01026",
    "FACE VALUE": 1
  },
  {
    Symbol: "DALBHARAT",
    StockName: "Dalmia Bharat Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-JAN-2019",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE00R701025",
    "FACE VALUE": 2
  },
  {
    Symbol: "DALMIASUG",
    StockName: "Dalmia Bharat Sugar and Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-JAN-1996",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE495A01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "DAMODARIND",
    StockName: "Damodar Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-JUL-2016",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE497D01022",
    "FACE VALUE": 5
  },
  {
    Symbol: "DATAMATICS",
    StockName: "Datamatics Global Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-MAY-2004",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE365B01017",
    "FACE VALUE": 5
  },
  {
    Symbol: "DBCORP",
    StockName: "D.B.Corp Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-JAN-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE950I01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "DBL",
    StockName: "Dilip Buildcon Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-AUG-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE917M01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "DBREALTY",
    StockName: "D B Realty Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-FEB-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE879I01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "DBSTOCKBRO",
    StockName: "DB (International) Stock Brokers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-FEB-2012",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE921B01025",
    "FACE VALUE": 2
  },
  {
    Symbol: "DCAL",
    StockName: "Dishman Carbogen Amcis Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-SEP-2017",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE385W01011",
    "FACE VALUE": 2
  },
  {
    Symbol: "DCBBANK",
    StockName: "DCB Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-OCT-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE503A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "DCM",
    StockName: "DCM  Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE498A01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "DCMFINSERV",
    StockName: "DCM Financial Services Limited",
    SERIES: "BE",
    "DATE OF LISTING": "21-MAY-1997",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE891B01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "DCMNVL",
    StockName: "DCM Nouvelle Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-JUL-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE08KP01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "DCMSHRIRAM",
    StockName: "DCM Shriram Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-APR-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE499A01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "DCW",
    StockName: "DCW Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-MAY-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE500A01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "DECCANCE",
    StockName: "Deccan Cements Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-AUG-2007",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE583C01021",
    "FACE VALUE": 5
  },
  {
    Symbol: "DEEPAKFERT",
    StockName: "Deepak Fertilizers and Petrochemicals Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-JAN-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE501A01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "DEEPAKNTR",
    StockName: "Deepak Nitrite Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-SEP-2010",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE288B01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "DEEPIND",
    StockName: "Deep Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAR-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE677H01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "DELTACORP",
    StockName: "Delta Corp Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-NOV-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE124G01033",
    "FACE VALUE": 1
  },
  {
    Symbol: "DELTAMAGNT",
    StockName: "Delta Manufacturing Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-OCT-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE393A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "DEN",
    StockName: "Den Networks Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-NOV-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE947J01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "DENORA",
    StockName: "De Nora India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-AUG-1997",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE244A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "DFMFOODS",
    StockName: "DFM Foods Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-DEC-2016",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE456C01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "DGCONTENT",
    StockName: "Digicontent Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-JUN-2019",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE03JI01017",
    "FACE VALUE": 2
  },
  {
    Symbol: "DHAMPURSUG",
    StockName: "Dhampur Sugar Mills Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE041A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "DHANBANK",
    StockName: "Dhanlaxmi Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-APR-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE680A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "DHANUKA",
    StockName: "Dhanuka Agritech Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-JUN-2011",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE435G01025",
    "FACE VALUE": 2
  },
  {
    Symbol: "DHARSUGAR",
    StockName: "Dharani Sugars & Chemicals Limited",
    SERIES: "BE",
    "DATE OF LISTING": "22-MAY-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE988C01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "DHFL",
    StockName: "Dewan Housing Finance Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-OCT-2002",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE202B01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "DHUNINV",
    StockName: "Dhunseri Investments Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-MAR-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE320L01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "DIAMONDYD",
    StockName: "Prataap Snacks Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-OCT-2017",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE393P01035",
    "FACE VALUE": 5
  },
  {
    Symbol: "DIAPOWER",
    StockName: "Diamond Power Infra Ltd",
    SERIES: "BZ",
    "DATE OF LISTING": "29-SEP-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE989C01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "DICIND",
    StockName: "DIC India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-AUG-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE303A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "DIGISPICE",
    StockName: "DiGiSPICE Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-MAY-2008",
    "PAID UP VALUE": 3,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE927C01020",
    "FACE VALUE": 3
  },
  {
    Symbol: "DIGJAMLTD",
    StockName: "Digjam Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "13-JUL-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE731U01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "DISHTV",
    StockName: "Dish TV India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-APR-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE836F01026",
    "FACE VALUE": 1
  },
  {
    Symbol: "DIVISLAB",
    StockName: "Divi's Laboratories Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-MAR-2003",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE361B01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "DIXON",
    StockName: "Dixon Technologies (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-SEP-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE935N01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "DLF",
    StockName: "DLF Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-JUL-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE271C01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "DLINKINDIA",
    StockName: "D-Link (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-DEC-2009",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE250K01012",
    "FACE VALUE": 2
  },
  {
    Symbol: "DMART",
    StockName: "Avenue Supermarts Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-MAR-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE192R01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "DNAMEDIA",
    StockName: "Diligent Media Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-DEC-2017",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE016M01021",
    "FACE VALUE": 1
  },
  {
    Symbol: "DOLAT",
    StockName: "Dolat Investments Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-AUG-2019",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE966A01022",
    "FACE VALUE": 1
  },
  {
    Symbol: "DOLLAR",
    StockName: "Dollar Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-APR-2017",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE325C01035",
    "FACE VALUE": 2
  },
  {
    Symbol: "DONEAR",
    StockName: "Donear Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-DEC-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE668D01028",
    "FACE VALUE": 2
  },
  {
    Symbol: "DPSCLTD",
    StockName: "DPSC Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-APR-2008",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE360C01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "DPWIRES",
    StockName: "D P Wires Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-JAN-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE864X01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "DQE",
    StockName: "DQ Entertainment (International) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-JUN-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE656K01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "DREDGECORP",
    StockName: "Dredging Corporation of India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-JAN-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE506A01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "DRREDDY",
    StockName: "Dr. Reddy's Laboratories Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-MAY-2003",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE089A01023",
    "FACE VALUE": 5
  },
  {
    Symbol: "DSSL",
    StockName: "Dynacons Systems & Solutions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-DEC-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE417B01040",
    "FACE VALUE": 10
  },
  {
    Symbol: "DTIL",
    StockName: "Dhunseri Tea & Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-JAN-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE341R01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "DUCON",
    StockName: "Ducon Infratechnologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-OCT-2012",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE741L01018",
    "FACE VALUE": 1
  },
  {
    Symbol: "DVL",
    StockName: "Dhunseri Ventures Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-JAN-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE477B01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "DWARKESH",
    StockName: "Dwarikesh Sugar Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-DEC-2004",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE366A01041",
    "FACE VALUE": 1
  },
  {
    Symbol: "DYNAMATECH",
    StockName: "Dynamatic Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-SEP-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE221B01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "DYNPRO",
    StockName: "Dynemic Products Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-JUL-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE256H01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "EASTSILK",
    StockName: "Eastern Silk Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-JUL-1996",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE962C01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "EASUNREYRL",
    StockName: "Easun Reyrolle Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "23-JUL-1997",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE268C01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "EBIXFOREX",
    StockName: "EBIXCASH WORLD MONEY INDIA LIMITED",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUN-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE726L01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "ECLERX",
    StockName: "eClerx Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-DEC-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE738I01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "EDELWEISS",
    StockName: "Edelweiss Financial Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-DEC-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE532F01054",
    "FACE VALUE": 1
  },
  {
    Symbol: "EDUCOMP",
    StockName: "Educomp Solutions Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "13-JAN-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE216H01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "EICHERMOT",
    StockName: "Eicher Motors Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-SEP-2004",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE066A01013",
    "FACE VALUE": 1
  },
  {
    Symbol: "EIDPARRY",
    StockName: "EID Parry India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAY-1995",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE126A01031",
    "FACE VALUE": 1
  },
  {
    Symbol: "EIHAHOTELS",
    StockName: "EIH Associated Hotels Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-APR-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE276C01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "EIHOTEL",
    StockName: "EIH Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE230A01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "EIMCOELECO",
    StockName: "Eimco Elecon (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-APR-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE158B01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "EKC",
    StockName: "Everest Kanto Cylinder Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-DEC-2005",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE184H01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "ELECON",
    StockName: "Elecon Engineering Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-SEP-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE205B01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "ELECTCAST",
    StockName: "Electrosteel Castings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-JUN-2003",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE086A01029",
    "FACE VALUE": 1
  },
  {
    Symbol: "ELECTHERM",
    StockName: "Electrotherm (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-AUG-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE822G01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "ELGIEQUIP",
    StockName: "Elgi Equipments Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-NOV-1995",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE285A01027",
    "FACE VALUE": 1
  },
  {
    Symbol: "ELGIRUBCO",
    StockName: "Elgi Rubber Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-AUG-2011",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE819L01012",
    "FACE VALUE": 1
  },
  {
    Symbol: "EMAMILTD",
    StockName: "Emami Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-AUG-2006",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE548C01032",
    "FACE VALUE": 1
  },
  {
    Symbol: "EMAMIPAP",
    StockName: "Emami Paper Mills Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-MAY-2019",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE830C01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "EMAMIREAL",
    StockName: "Emami Realty Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUL-2010",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE778K01012",
    "FACE VALUE": 2
  },
  {
    Symbol: "EMCO",
    StockName: "Emco Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "15-DEC-2005",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE078A01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "EMKAY",
    StockName: "Emkay Global Financial Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-APR-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE296H01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "EMMBI",
    StockName: "Emmbi Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-FEB-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE753K01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "ENDURANCE",
    StockName: "Endurance Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-OCT-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE913H01037",
    "FACE VALUE": 10
  },
  {
    Symbol: "ENERGYDEV",
    StockName: "Energy Development Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-NOV-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE306C01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "ENGINERSIN",
    StockName: "Engineers India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-AUG-1997",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE510A01028",
    "FACE VALUE": 5
  },
  {
    Symbol: "ENIL",
    StockName: "Entertainment Network (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-FEB-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE265F01028",
    "FACE VALUE": 10
  },
  {
    Symbol: "EON",
    StockName: "Eon Electric Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "07-JUN-2012",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE076H01025",
    "FACE VALUE": 5
  },
  {
    Symbol: "EQUITAS",
    StockName: "Equitas Holdings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-APR-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE988K01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "ERIS",
    StockName: "Eris Lifesciences Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-JUN-2017",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE406M01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "EROSMEDIA",
    StockName: "Eros International Media Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-OCT-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE416L01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "ESABINDIA",
    StockName: "Esab India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-NOV-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE284A01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "ESCORTS",
    StockName: "Escorts Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-MAR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE042A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "ESSARSHPNG",
    StockName: "Essar Shipping Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-NOV-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE122M01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "ESSELPACK",
    StockName: "Essel Propack Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-FEB-2002",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE255A01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "ESTER",
    StockName: "Ester Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-JUN-2011",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE778B01029",
    "FACE VALUE": 5
  },
  {
    Symbol: "EUROCERA",
    StockName: "Euro Ceramics Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "09-MAR-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE649H01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "EUROMULTI",
    StockName: "Euro Multivision Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-OCT-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE063J01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "EUROTEXIND",
    StockName: "Eurotex Industries and Exports Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-JAN-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE022C01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "EVEREADY",
    StockName: "Eveready Industries India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-APR-2005",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE128A01029",
    "FACE VALUE": 5
  },
  {
    Symbol: "EVERESTIND",
    StockName: "Everest Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE295A01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "EXCEL",
    StockName: "Excel Realty N Infra Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-AUG-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE688J01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "EXCELINDUS",
    StockName: "Excel Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-JUN-2004",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE369A01029",
    "FACE VALUE": 5
  },
  {
    Symbol: "EXIDEIND",
    StockName: "Exide Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-JUN-2003",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE302A01020",
    "FACE VALUE": 1
  },
  {
    Symbol: "EXPLEOSOL",
    StockName: "Expleo Solutions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-OCT-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE201K01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "FACT",
    StockName: "Fertilizers and Chemicals Travancore Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-APR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE188A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "FAIRCHEM",
    StockName: "Fairchem Speciality Limited",
    SERIES: "BE",
    "DATE OF LISTING": "08-MAY-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE959A01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "FCL",
    StockName: "Fineotex Chemical Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-JAN-2015",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE045J01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "FCONSUMER",
    StockName: "Future Consumer Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-JUL-2013",
    "PAID UP VALUE": 6,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE220J01025",
    "FACE VALUE": 6
  },
  {
    Symbol: "FCSSOFT",
    StockName: "FCS Software Solutions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-SEP-2005",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE512B01022",
    "FACE VALUE": 1
  },
  {
    Symbol: "FDC",
    StockName: "FDC Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-AUG-1997",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE258B01022",
    "FACE VALUE": 1
  },
  {
    Symbol: "FEDERALBNK",
    StockName: "The Federal Bank  Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE171A01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "FEL",
    StockName: "Future Enterprises Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-NOV-2001",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE623B01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "FELDVR",
    StockName: "Future Enterprises Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-FEB-2009",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "IN9623B01058",
    "FACE VALUE": 2
  },
  {
    Symbol: "FIEMIND",
    StockName: "Fiem Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-OCT-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE737H01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "FILATEX",
    StockName: "Filatex India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-AUG-2011",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE816B01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "FINCABLES",
    StockName: "Finolex Cables Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-FEB-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE235A01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "FINEORG",
    StockName: "Fine Organic Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-JUL-2018",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE686Y01026",
    "FACE VALUE": 5
  },
  {
    Symbol: "FINPIPE",
    StockName: "Finolex Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE183A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "FLEXITUFF",
    StockName: "Flexituff Ventures International Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-OCT-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE060J01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "FLFL",
    StockName: "Future Lifestyle Fashions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-OCT-2013",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE452O01016",
    "FACE VALUE": 2
  },
  {
    Symbol: "FLUOROCHEM",
    StockName: "Gujarat Fluorochemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-OCT-2019",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE09N301011",
    "FACE VALUE": 1
  },
  {
    Symbol: "FMGOETZE",
    StockName: "Federal-Mogul Goetze (India) Limited.",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE529A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "FMNL",
    StockName: "Future Market Networks Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-DEC-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE360L01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "FORCEMOT",
    StockName: "FORCE MOTORS LTD",
    SERIES: "EQ",
    "DATE OF LISTING": "03-NOV-1994",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE451A01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "FORTIS",
    StockName: "Fortis Healthcare Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAY-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE061F01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "FOSECOIND",
    StockName: "Foseco India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-MAY-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE519A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "FRETAIL",
    StockName: "Future Retail Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-AUG-2016",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE752P01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "FSC",
    StockName: "Future Supply Chain Solutions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-DEC-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE935Q01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "FSL",
    StockName: "Firstsource Solutions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-FEB-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE684F01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "GABRIEL",
    StockName: "Gabriel India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-APR-2005",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE524A01029",
    "FACE VALUE": 1
  },
  {
    Symbol: "GAEL",
    StockName: "Gujarat Ambuja Exports Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-OCT-2000",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE036B01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "GAIL",
    StockName: "GAIL (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-APR-1997",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE129A01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "GAL",
    StockName: "Gyscoal Alloys Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-OCT-2010",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE482J01021",
    "FACE VALUE": 1
  },
  {
    Symbol: "GALAXYSURF",
    StockName: "Galaxy Surfactants Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE600K01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "GALLANTT",
    StockName: "Gallantt Metal Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-APR-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE297H01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "GALLISPAT",
    StockName: "Gallantt Ispat Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-OCT-2010",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE528K01029",
    "FACE VALUE": 1
  },
  {
    Symbol: "GAMMNINFRA",
    StockName: "Gammon Infrastructure Projects Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-APR-2008",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE181G01025",
    "FACE VALUE": 2
  },
  {
    Symbol: "GANDHITUBE",
    StockName: "Gandhi Special Tubes Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-JAN-2007",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE524B01027",
    "FACE VALUE": 5
  },
  {
    Symbol: "GANECOS",
    StockName: "Ganesha Ecosphere Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAR-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE845D01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "GANESHHOUC",
    StockName: "Ganesh Housing Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-MAR-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE460C01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "GANGESSECU",
    StockName: "Ganges Securities Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUL-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE335W01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "GARDENSILK",
    StockName: "Garden Silk Mills Limited",
    SERIES: "BE",
    "DATE OF LISTING": "01-APR-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE526A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "GARFIBRES",
    StockName: "Garware Technical Fibres Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-APR-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE276A01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "GATI",
    StockName: "GATI Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-OCT-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE152B01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "GAYAHWS",
    StockName: "Gayatri Highways Limited",
    SERIES: "BE",
    "DATE OF LISTING": "28-JUN-2018",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE287Z01012",
    "FACE VALUE": 2
  },
  {
    Symbol: "GAYAPROJ",
    StockName: "Gayatri Projects Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-AUG-2011",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE336H01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "GBGLOBAL",
    StockName: "GB Global Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-JUN-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE087J01028",
    "FACE VALUE": 10
  },
  {
    Symbol: "GDL",
    StockName: "Gateway Distriparks Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-MAR-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE852F01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "GEECEE",
    StockName: "GeeCee Ventures Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-OCT-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE916G01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "GEEKAYWIRE",
    StockName: "Geekay Wires Limited",
    SERIES: "BE",
    "DATE OF LISTING": "06-MAR-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE669X01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "GENESYS",
    StockName: "Genesys International Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-JAN-2003",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE727B01026",
    "FACE VALUE": 5
  },
  {
    Symbol: "GENUSPAPER",
    StockName: "Genus Paper & Boards Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-FEB-2015",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE949P01018",
    "FACE VALUE": 1
  },
  {
    Symbol: "GENUSPOWER",
    StockName: "Genus Power Infrastructures Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-JUL-2005",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE955D01029",
    "FACE VALUE": 1
  },
  {
    Symbol: "GEOJITFSL",
    StockName: "Geojit Financial Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-JUL-2005",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE007B01023",
    "FACE VALUE": 1
  },
  {
    Symbol: "GEPIL",
    StockName: "GE Power India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-APR-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE878A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "GESHIP",
    StockName: "The Great Eastern Shipping Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-NOV-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE017A01032",
    "FACE VALUE": 10
  },
  {
    Symbol: "GET&D",
    StockName: "GE T&D India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-JUN-2008",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE200A01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "GFLLIMITED",
    StockName: "GFL Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-MAY-1995",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE538A01037",
    "FACE VALUE": 1
  },
  {
    Symbol: "GFSTEELS",
    StockName: "Grand Foundry Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-JUL-2019",
    "PAID UP VALUE": 4,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE534A01028",
    "FACE VALUE": 4
  },
  {
    Symbol: "GHCL",
    StockName: "GHCL Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-JUL-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE539A01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "GICHSGFIN",
    StockName: "GIC Housing Finance Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-MAY-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE289B01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "GICRE",
    StockName: "General Insurance Corporation of India",
    SERIES: "EQ",
    "DATE OF LISTING": "25-OCT-2017",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE481Y01014",
    "FACE VALUE": 5
  },
  {
    Symbol: "GILLANDERS",
    StockName: "Gillanders Arbuthnot & Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-DEC-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE047B01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "GILLETTE",
    StockName: "Gillette India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-JUL-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE322A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "GINNIFILA",
    StockName: "Ginni Filaments Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAY-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE424C01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "GIPCL",
    StockName: "Gujarat Industries Power Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE162A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "GISOLUTION",
    StockName: "GI Engineering Solutions Limited",
    SERIES: "BE",
    "DATE OF LISTING": "30-JAN-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE065J01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "GKWLIMITED",
    StockName: "GKW Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-JUL-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE528A01020",
    "FACE VALUE": 10
  },
  {
    Symbol: "GLAXO",
    StockName: "GlaxoSmithKline Pharmaceuticals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-DEC-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE159A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "GLENMARK",
    StockName: "Glenmark Pharmaceuticals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-FEB-2000",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE935A01035",
    "FACE VALUE": 1
  },
  {
    Symbol: "GLFL",
    StockName: "Gujarat Lease Financing Limited",
    SERIES: "BE",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE540A01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "GLOBALVECT",
    StockName: "Global Vectra Helicorp Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-OCT-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE792H01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "GLOBOFFS",
    StockName: "Global Offshore Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-MAY-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE446C01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "GLOBUSSPR",
    StockName: "Globus Spirits Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-SEP-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE615I01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "GMBREW",
    StockName: "GM Breweries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-AUG-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE075D01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "GMDCLTD",
    StockName: "Gujarat Mineral Development Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-DEC-1997",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE131A01031",
    "FACE VALUE": 2
  },
  {
    Symbol: "GMMPFAUDLR",
    StockName: "GMM Pfaudler Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-MAR-2018",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE541A01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "GMRINFRA",
    StockName: "GMR Infrastructure Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-AUG-2006",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE776C01039",
    "FACE VALUE": 1
  },
  {
    Symbol: "GNA",
    StockName: "GNA Axles Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-SEP-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE934S01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "GNFC",
    StockName: "Gujarat Narmada Valley Fertilizers and Chemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-MAY-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE113A01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "GOACARBON",
    StockName: "Goa Carbon Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-JUN-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE426D01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "GOCLCORP",
    StockName: "GOCL Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-JUN-2014",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE077F01035",
    "FACE VALUE": 2
  },
  {
    Symbol: "GODFRYPHLP",
    StockName: "Godfrey Phillips India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-JUL-1996",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE260B01028",
    "FACE VALUE": 2
  },
  {
    Symbol: "GODREJAGRO",
    StockName: "Godrej Agrovet Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-OCT-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE850D01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "GODREJCP",
    StockName: "Godrej Consumer Products Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-JUN-2001",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE102D01028",
    "FACE VALUE": 1
  },
  {
    Symbol: "GODREJIND",
    StockName: "Godrej Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-FEB-2003",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE233A01035",
    "FACE VALUE": 1
  },
  {
    Symbol: "GODREJPROP",
    StockName: "Godrej Properties Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-JAN-2010",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE484J01027",
    "FACE VALUE": 5
  },
  {
    Symbol: "GOENKA",
    StockName: "Goenka Diamond and Jewels Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "16-APR-2010",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE516K01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "GOKEX",
    StockName: "Gokaldas Exports Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-APR-2005",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE887G01027",
    "FACE VALUE": 5
  },
  {
    Symbol: "GOKUL",
    StockName: "Gokul Refoils and Solvent Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-JUN-2008",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE020J01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "GOKULAGRO",
    StockName: "Gokul Agro Resources Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-MAR-2016",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE314T01025",
    "FACE VALUE": 2
  },
  {
    Symbol: "GOLDENTOBC",
    StockName: "Golden Tobacco Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE973A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "GOLDIAM",
    StockName: "Goldiam International Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-AUG-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE025B01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "GOLDTECH",
    StockName: "Goldstone Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-APR-2001",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE805A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "GOODLUCK",
    StockName: "Goodluck India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-JAN-2015",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE127I01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "GPIL",
    StockName: "Godawari Power And Ispat limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-APR-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE177H01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "GPPL",
    StockName: "Gujarat Pipavav Port Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-SEP-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE517F01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "GPTINFRA",
    StockName: "GPT Infraprojects Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-JUL-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE390G01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "GRANULES",
    StockName: "Granules India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-JUN-2005",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE101D01020",
    "FACE VALUE": 1
  },
  {
    Symbol: "GRAPHITE",
    StockName: "Graphite India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-FEB-2003",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE371A01025",
    "FACE VALUE": 2
  },
  {
    Symbol: "GRASIM",
    StockName: "Grasim Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAY-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE047A01021",
    "FACE VALUE": 2
  },
  {
    Symbol: "GRAVITA",
    StockName: "Gravita India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-NOV-2010",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE024L01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "GREAVESCOT",
    StockName: "Greaves Cotton Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-SEP-2004",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE224A01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "GREENLAM",
    StockName: "Greenlam Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-MAR-2015",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE544R01013",
    "FACE VALUE": 5
  },
  {
    Symbol: "GREENPANEL",
    StockName: "Greenpanel Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-OCT-2019",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE08ZM01014",
    "FACE VALUE": 1
  },
  {
    Symbol: "GREENPLY",
    StockName: "Greenply Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-MAR-1996",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE461C01038",
    "FACE VALUE": 1
  },
  {
    Symbol: "GREENPOWER",
    StockName: "Orient Green Power Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-OCT-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE999K01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "GRINDWELL",
    StockName: "Grindwell Norton Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-SEP-2006",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE536A01023",
    "FACE VALUE": 5
  },
  {
    Symbol: "GROBTEA",
    StockName: "The Grob Tea Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-JUL-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE646C01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "GRPLTD",
    StockName: "GRP Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-FEB-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE137I01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "GRSE",
    StockName: "Garden Reach Shipbuilders & Engineers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-OCT-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE382Z01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "GSCLCEMENT",
    StockName: "Gujarat Sidhee Cement Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-MAY-2013",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE542A01039",
    "FACE VALUE": 10
  },
  {
    Symbol: "GSFC",
    StockName: "Gujarat State Fertilizers & Chemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-SEP-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE026A01025",
    "FACE VALUE": 2
  },
  {
    Symbol: "GSPL",
    StockName: "Gujarat State Petronet Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-FEB-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE246F01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "GSS",
    StockName: "GSS Infotech Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-MAR-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE871H01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "GTL",
    StockName: "GTL Limited",
    SERIES: "BE",
    "DATE OF LISTING": "29-MAR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE043A01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "GTLINFRA",
    StockName: "GTL Infrastructure Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-NOV-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE221H01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "GTNIND",
    StockName: "GTN Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-AUG-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE537A01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "GTNTEX",
    StockName: "GTN Textiles Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-MAY-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE302H01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "GTPL",
    StockName: "GTPL Hathway Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-JUL-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE869I01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "GUFICBIO",
    StockName: "Gufic Biosciences Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-OCT-2004",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE742B01025",
    "FACE VALUE": 1
  },
  {
    Symbol: "GUJALKALI",
    StockName: "Gujarat Alkalies and Chemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-AUG-1997",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE186A01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "GUJAPOLLO",
    StockName: "Gujarat Apollo Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-JUN-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE826C01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "GUJGASLTD",
    StockName: "Gujarat Gas Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-SEP-2015",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE844O01030",
    "FACE VALUE": 2
  },
  {
    Symbol: "GUJRAFFIA",
    StockName: "Gujarat Raffia Industries Limited",
    SERIES: "BE",
    "DATE OF LISTING": "09-OCT-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE610B01024",
    "FACE VALUE": 10
  },
  {
    Symbol: "GULFOILLUB",
    StockName: "Gulf Oil Lubricants India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-JUL-2014",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE635Q01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "GULFPETRO",
    StockName: "GP Petroleums Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-SEP-2004",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE586G01017",
    "FACE VALUE": 5
  },
  {
    Symbol: "GULPOLY",
    StockName: "Gulshan Polyols Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JAN-2015",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE255D01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "GVKPIL",
    StockName: "GVK Power & Infrastructure Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-FEB-2006",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE251H01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "HAL",
    StockName: "Hindustan Aeronautics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-MAR-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE066F01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "HARITASEAT",
    StockName: "Harita Seating Systems Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-APR-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE939D01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "HARRMALAYA",
    StockName: "Harrisons  Malayalam Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE544A01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "HATHWAY",
    StockName: "Hathway Cable & Datacom Limited",
    SERIES: "BE",
    "DATE OF LISTING": "25-FEB-2010",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE982F01036",
    "FACE VALUE": 2
  },
  {
    Symbol: "HATSUN",
    StockName: "Hatsun Agro Product Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-JUN-2014",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE473B01035",
    "FACE VALUE": 1
  },
  {
    Symbol: "HAVELLS",
    StockName: "Havells India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-MAR-2001",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE176B01034",
    "FACE VALUE": 1
  },
  {
    Symbol: "HAVISHA",
    StockName: "Sri Havisha Hospitality and Infrastructure Limited",
    SERIES: "BE",
    "DATE OF LISTING": "16-FEB-2000",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE293B01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "HBLPOWER",
    StockName: "HBL Power Systems Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-JAN-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE292B01021",
    "FACE VALUE": 1
  },
  {
    Symbol: "HBSL",
    StockName: "HB Stockholdings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-JUL-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE550B01022",
    "FACE VALUE": 10
  },
  {
    Symbol: "HCC",
    StockName: "Hindustan Construction Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-APR-2003",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE549A01026",
    "FACE VALUE": 1
  },
  {
    Symbol: "HCG",
    StockName: "Healthcare Global Enterprises Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-MAR-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE075I01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "HCL-INSYS",
    StockName: "HCL Infosystems Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-JAN-1997",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE236A01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "HCLTECH",
    StockName: "HCL Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-JAN-2000",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE860A01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "HDFC",
    StockName: "Housing Development Finance Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-OCT-1996",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE001A01036",
    "FACE VALUE": 2
  },
  {
    Symbol: "HDFCAMC",
    StockName: "HDFC Asset Management Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-AUG-2018",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE127D01025",
    "FACE VALUE": 5
  },
  {
    Symbol: "HDFCBANK",
    StockName: "HDFC Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-NOV-1995",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE040A01034",
    "FACE VALUE": 1
  },
  {
    Symbol: "HDFCLIFE",
    StockName: "HDFC Life Insurance Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-NOV-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE795G01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "HDIL",
    StockName: "Housing Development and Infrastructure Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "24-JUL-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE191I01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "HEG",
    StockName: "HEG Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAY-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE545A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "HEIDELBERG",
    StockName: "HeidelbergCement India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-MAR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE578A01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "HERCULES",
    StockName: "Hercules Hoists Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-FEB-2008",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE688E01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "HERITGFOOD",
    StockName: "Heritage Foods Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-NOV-1996",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE978A01027",
    "FACE VALUE": 5
  },
  {
    Symbol: "HEROMOTOCO",
    StockName: "Hero MotoCorp Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-APR-2003",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE158A01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "HESTERBIO",
    StockName: "Hester Biosciences Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-MAR-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE782E01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "HEXATRADEX",
    StockName: "Hexa Tradex Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-APR-2012",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE750M01017",
    "FACE VALUE": 2
  },
  {
    Symbol: "HEXAWARE",
    StockName: "Hexaware Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-JUN-2002",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE093A01033",
    "FACE VALUE": 2
  },
  {
    Symbol: "HFCL",
    StockName: "HFCL Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAR-2011",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE548A01028",
    "FACE VALUE": 1
  },
  {
    Symbol: "HGINFRA",
    StockName: "H.G. Infra Engineering Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAR-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE926X01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "HGS",
    StockName: "Hinduja Global Solutions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-JUN-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE170I01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "HIKAL",
    StockName: "Hikal Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-FEB-2001",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE475B01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "HIL",
    StockName: "HIL Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-APR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE557A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "HILTON",
    StockName: "Hilton Metal Forging Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-MAY-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE788H01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "HIMATSEIDE",
    StockName: "Himatsingka Seide Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE049A01027",
    "FACE VALUE": 5
  },
  {
    Symbol: "HINDALCO",
    StockName: "Hindalco Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-JAN-1997",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE038A01020",
    "FACE VALUE": 1
  },
  {
    Symbol: "HINDCOMPOS",
    StockName: "Hindustan Composites Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-MAY-1996",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE310C01029",
    "FACE VALUE": 5
  },
  {
    Symbol: "HINDCOPPER",
    StockName: "Hindustan Copper Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-SEP-2010",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE531E01026",
    "FACE VALUE": 5
  },
  {
    Symbol: "HINDMOTORS",
    StockName: "Hindustan Motors Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-FEB-2011",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE253A01025",
    "FACE VALUE": 5
  },
  {
    Symbol: "HINDNATGLS",
    StockName: "Hindusthan National Glass & Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-APR-2009",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE952A01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "HINDOILEXP",
    StockName: "Hindustan Oil Exploration Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-SEP-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE345A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "HINDPETRO",
    StockName: "Hindustan Petroleum Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-JUN-1998",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE094A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "HINDUNILVR",
    StockName: "Hindustan Unilever Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-JUL-1995",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE030A01027",
    "FACE VALUE": 1
  },
  {
    Symbol: "HINDZINC",
    StockName: "Hindustan Zinc Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-NOV-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE267A01025",
    "FACE VALUE": 2
  },
  {
    Symbol: "HIRECT",
    StockName: "Hind Rectifiers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-DEC-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE835D01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "HISARMETAL",
    StockName: "Hisar Metal Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-JAN-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE598C01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "HITECH",
    StockName: "Hi-Tech Pipes Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-MAY-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE106T01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "HITECHCORP",
    StockName: "Hitech Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-DEC-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE120D01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "HITECHGEAR",
    StockName: "The Hi-Tech Gears Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-JAN-2002",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE127B01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "HLVLTD",
    StockName: "HLV LIMITED",
    SERIES: "EQ",
    "DATE OF LISTING": "19-JUL-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE102A01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "HMT",
    StockName: "HMT Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "29-AUG-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE262A01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "HMVL",
    StockName: "Hindustan Media Ventures Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-JUL-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE871K01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "HNDFDS",
    StockName: "Hindustan Foods Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-AUG-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE254N01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "HONAUT",
    StockName: "Honeywell Automation India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-JUL-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE671A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "HONDAPOWER",
    StockName: "Honda India Power Products Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-APR-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE634A01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "HOTELRUGBY",
    StockName: "Hotel Rugby Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-APR-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE275F01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "HOVS",
    StockName: "HOV Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-SEP-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE596H01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "HPL",
    StockName: "HPL Electric & Power Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-OCT-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE495S01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "HSCL",
    StockName: "Himadri Speciality Chemical Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-MAR-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE019C01026",
    "FACE VALUE": 1
  },
  {
    Symbol: "HSIL",
    StockName: "HSIL Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-MAY-2000",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE415A01038",
    "FACE VALUE": 2
  },
  {
    Symbol: "HTMEDIA",
    StockName: "HT Media Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-SEP-2005",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE501G01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "HUBTOWN",
    StockName: "Hubtown Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-FEB-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE703H01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "HUDCO",
    StockName: "Housing & Urban Development Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-MAY-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE031A01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "IBREALEST",
    StockName: "Indiabulls Real Estate Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-MAR-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE069I01010",
    "FACE VALUE": 2
  },
  {
    Symbol: "IBULHSGFIN",
    StockName: "Indiabulls Housing Finance Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-JUL-2013",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE148I01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "IBULISL",
    StockName: "Indiabulls Integrated Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-AUG-2011",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE126M01010",
    "FACE VALUE": 2
  },
  {
    Symbol: "IBVENTURES",
    StockName: "Indiabulls Ventures Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-APR-2008",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE274G01010",
    "FACE VALUE": 2
  },
  {
    Symbol: "ICICIBANK",
    StockName: "ICICI Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-SEP-1997",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE090A01021",
    "FACE VALUE": 2
  },
  {
    Symbol: "ICICIGI",
    StockName: "ICICI Lombard General Insurance Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-SEP-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE765G01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "ICICIPRULI",
    StockName: "ICICI Prudential Life Insurance Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-SEP-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE726G01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "ICIL",
    StockName: "Indo Count Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-SEP-2005",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE483B01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "ICRA",
    StockName: "ICRA Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-APR-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE725G01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "IDBI",
    StockName: "IDBI Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-SEP-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE008A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "IDEA",
    StockName: "Vodafone Idea Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAR-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE669E01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "IDFC",
    StockName: "IDFC Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-AUG-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE043D01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "IDFCFIRSTB",
    StockName: "IDFC First Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-NOV-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE092T01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "IEX",
    StockName: "Indian Energy Exchange Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-OCT-2017",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE022Q01020",
    "FACE VALUE": 1
  },
  {
    Symbol: "IFBAGRO",
    StockName: "IFB Agro Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-APR-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE076C01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "IFBIND",
    StockName: "IFB Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE559A01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "IFCI",
    StockName: "IFCI Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-APR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE039A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "IFGLEXPOR",
    StockName: "IFGL Refractories Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-NOV-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE133Y01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "IGARASHI",
    StockName: "Igarashi Motors India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-OCT-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE188B01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "IGL",
    StockName: "Indraprastha Gas Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-DEC-2003",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE203G01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "IGPL",
    StockName: "IG Petrochemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-JAN-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE204A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "IIFL",
    StockName: "IIFL Finance Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-MAY-2005",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE530B01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "IIFLSEC",
    StockName: "IIFL Securities Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-SEP-2019",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE489L01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "IIFLWAM",
    StockName: "Iifl Wealth Management Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-SEP-2019",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE466L01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "IITL",
    StockName: "Industrial Investment Trust Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-AUG-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE886A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "IL&FSENGG",
    StockName: "IL&FS Engineering and Construction Company Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "25-OCT-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE369I01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "IL&FSTRANS",
    StockName: "IL&FS Transportation Networks Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "30-MAR-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE975G01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "IMAGICAA",
    StockName: "Imagicaaworld Entertainment Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-APR-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE172N01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "IMFA",
    StockName: "Indian Metals & Ferro Alloys Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-JUL-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE919H01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "IMPAL",
    StockName: "India Motor Parts and Accessories Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-OCT-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE547E01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "IMPEXFERRO",
    StockName: "Impex Ferro Tech Limited",
    SERIES: "BE",
    "DATE OF LISTING": "03-FEB-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE691G01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "INDBANK",
    StockName: "Indbank Merchant Banking Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-OCT-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE841B01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "INDHOTEL",
    StockName: "The Indian Hotels Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-JUL-1996",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE053A01029",
    "FACE VALUE": 1
  },
  {
    Symbol: "INDIACEM",
    StockName: "The India Cements Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-MAY-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE383A01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "INDIAGLYCO",
    StockName: "India Glycols Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-JUL-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE560A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "INDIAMART",
    StockName: "Indiamart Intermesh Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-JUL-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE933S01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "INDIANB",
    StockName: "Indian Bank",
    SERIES: "EQ",
    "DATE OF LISTING": "01-MAR-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE562A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "INDIANCARD",
    StockName: "Indian Card Clothing Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-JAN-1997",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE061A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "INDIANHUME",
    StockName: "Indian Hume Pipe Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-AUG-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE323C01030",
    "FACE VALUE": 2
  },
  {
    Symbol: "INDIGO",
    StockName: "InterGlobe Aviation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-NOV-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE646L01027",
    "FACE VALUE": 10
  },
  {
    Symbol: "INDLMETER",
    StockName: "IMP Powers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-JAN-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE065B01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "INDNIPPON",
    StockName: "India Nippon Electricals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-MAY-1997",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE092B01025",
    "FACE VALUE": 5
  },
  {
    Symbol: "INDOCO",
    StockName: "Indoco Remedies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-JAN-2005",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE873D01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "INDORAMA",
    StockName: "Indo Rama Synthetics (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-JUN-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE156A01020",
    "FACE VALUE": 10
  },
  {
    Symbol: "INDOSOLAR",
    StockName: "Indosolar Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "29-SEP-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE866K01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "INDOSTAR",
    StockName: "IndoStar Capital Finance Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-MAY-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE896L01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "INDOTECH",
    StockName: "Indo Tech Transformers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-MAR-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE332H01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "INDOTHAI",
    StockName: "Indo Thai Securities Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-NOV-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE337M01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "INDOWIND",
    StockName: "Indowind Energy Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-SEP-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE227G01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "INDRAMEDCO",
    StockName: "Indraprastha Medical Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-APR-1997",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE681B01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "INDSWFTLAB",
    StockName: "Ind-Swift Laboratories Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-JUL-1997",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE915B01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "INDSWFTLTD",
    StockName: "Ind-Swift Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-OCT-2004",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE788B01028",
    "FACE VALUE": 2
  },
  {
    Symbol: "INDTERRAIN",
    StockName: "Indian Terrain Fashions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-MAR-2011",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE611L01021",
    "FACE VALUE": 2
  },
  {
    Symbol: "INDUSINDBK",
    StockName: "IndusInd Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JAN-1998",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE095A01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "INEOSSTYRO",
    StockName: "INEOS Styrolution India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE189B01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "INFIBEAM",
    StockName: "Infibeam Avenues Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-APR-2016",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE483S01020",
    "FACE VALUE": 1
  },
  {
    Symbol: "INFOBEAN",
    StockName: "InfoBeans Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-JUL-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE344S01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "INFOMEDIA",
    StockName: "Infomedia Press Limited",
    SERIES: "BE",
    "DATE OF LISTING": "12-OCT-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE669A01022",
    "FACE VALUE": 10
  },
  {
    Symbol: "INFRATEL",
    StockName: "Bharti Infratel Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-DEC-2012",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE121J01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "INFY",
    StockName: "Infosys Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE009A01021",
    "FACE VALUE": 5
  },
  {
    Symbol: "INGERRAND",
    StockName: "Ingersoll Rand (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-APR-1999",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE177A01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "INOXLEISUR",
    StockName: "INOX Leisure Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-FEB-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE312H01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "INOXWIND",
    StockName: "Inox Wind Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-APR-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE066P01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "INSECTICID",
    StockName: "Insecticides (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-MAY-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE070I01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "INSPIRISYS",
    StockName: "Inspirisys Solutions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-OCT-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE020G01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "INTEGRA",
    StockName: "Integra Garments and Textiles Limited",
    SERIES: "BE",
    "DATE OF LISTING": "20-AUG-2013",
    "PAID UP VALUE": 3,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE418N01027",
    "FACE VALUE": 3
  },
  {
    Symbol: "INTELLECT",
    StockName: "Intellect Design Arena Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-DEC-2014",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE306R01017",
    "FACE VALUE": 5
  },
  {
    Symbol: "INTENTECH",
    StockName: "Intense Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-MAR-2017",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE781A01025",
    "FACE VALUE": 2
  },
  {
    Symbol: "INVENTURE",
    StockName: "Inventure Growth & Securities Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-AUG-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE878H01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "IOB",
    StockName: "Indian Overseas Bank",
    SERIES: "EQ",
    "DATE OF LISTING": "07-DEC-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE565A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "IOC",
    StockName: "Indian Oil Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-JUL-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE242A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "IOLCP",
    StockName: "IOL Chemicals and Pharmaceuticals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-NOV-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE485C01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "IPCALAB",
    StockName: "IPCA Laboratories Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE571A01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "IRB",
    StockName: "IRB Infrastructure Developers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-FEB-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE821I01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "IRCON",
    StockName: "Ircon International Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-SEP-2018",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE962Y01021",
    "FACE VALUE": 2
  },
  {
    Symbol: "IRCTC",
    StockName: "Indian Railway Catering And Tourism Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-OCT-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE335Y01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "ISEC",
    StockName: "ICICI Securities Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-APR-2018",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE763G01038",
    "FACE VALUE": 5
  },
  {
    Symbol: "ISFT",
    StockName: "Intrasoft Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-APR-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE566K01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "ISMTLTD",
    StockName: "ISMT Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-AUG-2007",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE732F01019",
    "FACE VALUE": 5
  },
  {
    Symbol: "ITC",
    StockName: "ITC Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-AUG-1995",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE154A01025",
    "FACE VALUE": 1
  },
  {
    Symbol: "ITDC",
    StockName: "India Tourism Development Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-DEC-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE353K01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "ITDCEM",
    StockName: "ITD Cementation India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-FEB-1999",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE686A01026",
    "FACE VALUE": 1
  },
  {
    Symbol: "ITI",
    StockName: "ITI Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-SEP-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE248A01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "IVC",
    StockName: "IL&FS Investment Managers Limited",
    SERIES: "BE",
    "DATE OF LISTING": "15-SEP-1999",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE050B01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "IVP",
    StockName: "IVP Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-SEP-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE043C01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "IZMO",
    StockName: "IZMO Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-FEB-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE848A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "J&KBANK",
    StockName: "The Jammu & Kashmir Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-JUL-1998",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE168A01041",
    "FACE VALUE": 1
  },
  {
    Symbol: "JAGRAN",
    StockName: "Jagran Prakashan Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-FEB-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE199G01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "JAGSNPHARM",
    StockName: "Jagsonpal Pharmaceuticals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-MAR-2000",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE048B01027",
    "FACE VALUE": 5
  },
  {
    Symbol: "JAIBALAJI",
    StockName: "Jai Balaji Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-DEC-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE091G01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "JAICORPLTD",
    StockName: "Jai Corp Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-NOV-1997",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE070D01027",
    "FACE VALUE": 1
  },
  {
    Symbol: "JAIHINDPRO",
    StockName: "Jaihind Projects Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "29-FEB-2012",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE343D01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "JAINSTUDIO",
    StockName: "Jain Studios Limited",
    SERIES: "BE",
    "DATE OF LISTING": "19-NOV-1997",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE486B01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "JAMNAAUTO",
    StockName: "Jamna Auto Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-DEC-2010",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE039C01032",
    "FACE VALUE": 1
  },
  {
    Symbol: "JASH",
    StockName: "Jash Engineering Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-OCT-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE039O01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "JAYAGROGN",
    StockName: "Jayant Agro Organics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-APR-1996",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE785A01026",
    "FACE VALUE": 5
  },
  {
    Symbol: "JAYBARMARU",
    StockName: "Jay Bharat Maruti Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-JAN-1996",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE571B01028",
    "FACE VALUE": 5
  },
  {
    Symbol: "JAYNECOIND",
    StockName: "Jayaswal Neco Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAY-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE854B01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "JAYSREETEA",
    StockName: "Jayshree Tea & Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-FEB-1995",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE364A01020",
    "FACE VALUE": 5
  },
  {
    Symbol: "JBCHEPHARM",
    StockName: "JB Chemicals & Pharmaceuticals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-APR-2003",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE572A01028",
    "FACE VALUE": 2
  },
  {
    Symbol: "JBFIND",
    StockName: "JBF Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-FEB-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE187A01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "JBMA",
    StockName: "JBM Auto Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-DEC-2004",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE927D01028",
    "FACE VALUE": 5
  },
  {
    Symbol: "JCHAC",
    StockName: "Johnson Controls - Hitachi Air Conditioning India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-JAN-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE782A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "JETAIRWAYS",
    StockName: "Jet Airways (India) Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "14-MAR-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE802G01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "JHS",
    StockName: "JHS Svendgaard Laboratories Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-OCT-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE544H01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "JIKIND",
    StockName: "JIK Industries Limited",
    SERIES: "BE",
    "DATE OF LISTING": "26-NOV-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE026B01049",
    "FACE VALUE": 10
  },
  {
    Symbol: "JINDALPHOT",
    StockName: "Jindal Photo Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-APR-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE796G01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "JINDALPOLY",
    StockName: "Jindal Poly Films Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-JAN-2002",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE197D01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "JINDALSAW",
    StockName: "Jindal Saw Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-APR-2003",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE324A01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "JINDALSTEL",
    StockName: "Jindal Steel & Power Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-DEC-1999",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE749A01030",
    "FACE VALUE": 1
  },
  {
    Symbol: "JINDRILL",
    StockName: "Jindal Drilling And Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-DEC-2006",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE742C01031",
    "FACE VALUE": 5
  },
  {
    Symbol: "JINDWORLD",
    StockName: "Jindal Worldwide Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-NOV-2010",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE247D01039",
    "FACE VALUE": 1
  },
  {
    Symbol: "JISLDVREQS",
    StockName: "Jain Irrigation Systems Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-NOV-2011",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "IN9175A01010",
    "FACE VALUE": 2
  },
  {
    Symbol: "JISLJALEQS",
    StockName: "Jain Irrigation Systems Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-AUG-2001",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE175A01038",
    "FACE VALUE": 2
  },
  {
    Symbol: "JITFINFRA",
    StockName: "JITF Infralogistics Limited",
    SERIES: "BE",
    "DATE OF LISTING": "27-FEB-2017",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE863T01013",
    "FACE VALUE": 2
  },
  {
    Symbol: "JIYAECO",
    StockName: "Jiya Eco-Products Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-AUG-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE023S01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "JKCEMENT",
    StockName: "JK Cement Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-MAR-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE823G01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "JKIL",
    StockName: "J.Kumar Infraprojects Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-FEB-2008",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE576I01022",
    "FACE VALUE": 5
  },
  {
    Symbol: "JKLAKSHMI",
    StockName: "JK Lakshmi Cement Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-JUN-2006",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE786A01032",
    "FACE VALUE": 5
  },
  {
    Symbol: "JKPAPER",
    StockName: "JK Paper Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-JUN-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE789E01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "JKTYRE",
    StockName: "JK Tyre & Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-MAR-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE573A01042",
    "FACE VALUE": 2
  },
  {
    Symbol: "JMA",
    StockName: "Jullundur Motor Agency (Delhi) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-MAR-2015",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE412C01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "JMCPROJECT",
    StockName: "JMC Projects (India)  Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-NOV-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE890A01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "JMFINANCIL",
    StockName: "JM Financial Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-OCT-2006",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE780C01023",
    "FACE VALUE": 1
  },
  {
    Symbol: "JMTAUTOLTD",
    StockName: "JMT Auto Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-APR-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE988E01036",
    "FACE VALUE": 1
  },
  {
    Symbol: "JOCIL",
    StockName: "Jocil Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-OCT-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE839G01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "JPASSOCIAT",
    StockName: "Jaiprakash Associates Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-JUN-2004",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE455F01025",
    "FACE VALUE": 2
  },
  {
    Symbol: "JPINFRATEC",
    StockName: "Jaypee Infratech Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-MAY-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE099J01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "JPOLYINVST",
    StockName: "Jindal Poly Investment and Finance Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-NOV-2013",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE147P01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "JPPOWER",
    StockName: "Jaiprakash Power Ventures Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-APR-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE351F01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "JSL",
    StockName: "Jindal Stainless Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-NOV-2003",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE220G01021",
    "FACE VALUE": 2
  },
  {
    Symbol: "JSLHISAR",
    StockName: "Jindal Stainless (Hisar) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JAN-2016",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE455T01018",
    "FACE VALUE": 2
  },
  {
    Symbol: "JSWENERGY",
    StockName: "JSW Energy Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-JAN-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE121E01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "JSWHL",
    StockName: "JSW Holdings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-JUN-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE824G01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "JSWSTEEL",
    StockName: "JSW Steel Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-MAR-2005",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE019A01038",
    "FACE VALUE": 1
  },
  {
    Symbol: "JTEKTINDIA",
    StockName: "Jtekt India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-JAN-2004",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE643A01035",
    "FACE VALUE": 1
  },
  {
    Symbol: "JUBILANT",
    StockName: "Jubilant Life Sciences Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-JUN-2003",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE700A01033",
    "FACE VALUE": 1
  },
  {
    Symbol: "JUBLFOOD",
    StockName: "Jubilant Foodworks Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE797F01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "JUBLINDS",
    StockName: "Jubilant Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-FEB-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE645L01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "JUMPNET",
    StockName: "Jump Networks Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-AUG-2019",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE974C01022",
    "FACE VALUE": 5
  },
  {
    Symbol: "JUSTDIAL",
    StockName: "Just Dial Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-JUN-2013",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE599M01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "JVLAGRO",
    StockName: "JVL Agro Industries Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "17-JUN-2011",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE430G01026",
    "FACE VALUE": 1
  },
  {
    Symbol: "JYOTHYLAB",
    StockName: "Jyothy Labs Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-DEC-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE668F01031",
    "FACE VALUE": 1
  },
  {
    Symbol: "JYOTISTRUC",
    StockName: "Jyoti Structures Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "19-JUL-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE197A01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "KABRAEXTRU",
    StockName: "Kabra Extrusion Technik Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-SEP-1995",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE900B01029",
    "FACE VALUE": 5
  },
  {
    Symbol: "KAJARIACER",
    StockName: "Kajaria Ceramics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-JUN-2004",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE217B01036",
    "FACE VALUE": 1
  },
  {
    Symbol: "KAKATCEM",
    StockName: "Kakatiya Cement Sugar & Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-DEC-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE437B01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "KALPATPOWR",
    StockName: "Kalpataru Power Transmission Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-DEC-2000",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE220B01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "KALYANI",
    StockName: "Kalyani Commercials Limited",
    SERIES: "BE",
    "DATE OF LISTING": "13-FEB-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE610E01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "KALYANIFRG",
    StockName: "Kalyani Forge Limited",
    SERIES: "BE",
    "DATE OF LISTING": "20-DEC-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE314G01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "KAMATHOTEL",
    StockName: "Kamat Hotels (I) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAY-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE967C01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "KAMDHENU",
    StockName: "Kamdhenu Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAY-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE390H01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "KANANIIND",
    StockName: "Kanani Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-DEC-2011",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE879E01037",
    "FACE VALUE": 1
  },
  {
    Symbol: "KANORICHEM",
    StockName: "Kanoria Chemicals & Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE138C01024",
    "FACE VALUE": 5
  },
  {
    Symbol: "KANSAINER",
    StockName: "Kansai Nerolac Paints Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-SEP-2003",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE531A01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "KAPSTON",
    StockName: "Kapston Facilities Management Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-MAY-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE542Z01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "KARDA",
    StockName: "Karda Constructions Limited",
    SERIES: "BE",
    "DATE OF LISTING": "02-APR-2018",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE278R01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "KARMAENG",
    StockName: "Karma Energy Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUN-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE725L01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "KARURVYSYA",
    StockName: "Karur Vysya Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-JUL-2000",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE036D01028",
    "FACE VALUE": 2
  },
  {
    Symbol: "KAUSHALYA",
    StockName: "Kaushalya Infrastructure Development Corporation Limited",
    SERIES: "BE",
    "DATE OF LISTING": "14-DEC-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE234I01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "KAYA",
    StockName: "Kaya Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-AUG-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE587G01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "KCP",
    StockName: "KCP Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-APR-1997",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE805C01028",
    "FACE VALUE": 1
  },
  {
    Symbol: "KCPSUGIND",
    StockName: "KCP Sugar and Industries Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-JUN-1997",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE790B01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "KDDL",
    StockName: "KDDL Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-MAR-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE291D01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "KEC",
    StockName: "KEC International Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAR-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE389H01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "KECL",
    StockName: "Kirloskar Electric Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAR-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE134B01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "KEI",
    StockName: "KEI Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-MAR-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE878B01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "KELLTONTEC",
    StockName: "Kellton Tech Solutions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-MAR-2016",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE164B01022",
    "FACE VALUE": 5
  },
  {
    Symbol: "KENNAMET",
    StockName: "Kennametal India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-NOV-1994",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE717A01029",
    "FACE VALUE": 10
  },
  {
    Symbol: "KERNEX",
    StockName: "Kernex Microsystems (India) Limited",
    SERIES: "BE",
    "DATE OF LISTING": "20-DEC-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE202H01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "KESORAMIND",
    StockName: "Kesoram Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-SEP-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE087A01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "KEYFINSERV",
    StockName: "Keynote Financial Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-JUN-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE681C01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "KGL",
    StockName: "Karuturi Global Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "03-MAY-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE299C01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "KHADIM",
    StockName: "Khadim India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-NOV-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE834I01025",
    "FACE VALUE": 10
  },
  {
    Symbol: "KHANDSE",
    StockName: "Khandwala Securities Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-FEB-2001",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE060B01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "KICL",
    StockName: "Kalyani Investment Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-JAN-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE029L01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "KILITCH",
    StockName: "Kilitch Drugs (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-SEP-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE729D01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "KINGFA",
    StockName: "Kingfa Science & Technology (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-NOV-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE473D01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "KIOCL",
    StockName: "KIOCL Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-NOV-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE880L01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "KIRIINDUS",
    StockName: "Kiri Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-APR-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE415I01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "KIRLFER",
    StockName: "Kirloskar Ferrous Industries Ltd",
    SERIES: "EQ",
    "DATE OF LISTING": "13-NOV-2019",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE884B01025",
    "FACE VALUE": 5
  },
  {
    Symbol: "KIRLOSBROS",
    StockName: "Kirloskar Brothers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-APR-2010",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE732A01036",
    "FACE VALUE": 2
  },
  {
    Symbol: "KIRLOSENG",
    StockName: "Kirloskar Oil Engines Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-DEC-2010",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE146L01010",
    "FACE VALUE": 2
  },
  {
    Symbol: "KIRLOSIND",
    StockName: "Kirloskar Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-JUN-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE250A01039",
    "FACE VALUE": 10
  },
  {
    Symbol: "KITEX",
    StockName: "Kitex Garments Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-SEP-2012",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE602G01020",
    "FACE VALUE": 1
  },
  {
    Symbol: "KKCL",
    StockName: "Kewal Kiran Clothing Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-APR-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE401H01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "KMSUGAR",
    StockName: "K.M.Sugar Mills Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-MAY-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE157H01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "KNRCON",
    StockName: "KNR Constructions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-FEB-2008",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE634I01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "KOHINOOR",
    StockName: "Kohinoor Foods Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "20-OCT-1999",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE080B01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "KOKUYOCMLN",
    StockName: "Kokuyo Camlin Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUL-2008",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE760A01029",
    "FACE VALUE": 1
  },
  {
    Symbol: "KOLTEPATIL",
    StockName: "Kolte - Patil Developers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-DEC-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE094I01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "KOPRAN",
    StockName: "Kopran Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-JUN-1999",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE082A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "KOTAKBANK",
    StockName: "Kotak Mahindra Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-DEC-1995",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE237A01028",
    "FACE VALUE": 5
  },
  {
    Symbol: "KOTARISUG",
    StockName: "Kothari Sugars And Chemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-DEC-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE419A01022",
    "FACE VALUE": 10
  },
  {
    Symbol: "KOTHARIPET",
    StockName: "Kothari Petrochemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-NOV-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE720A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "KOTHARIPRO",
    StockName: "Kothari Products Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-JUN-1998",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE823A01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "KPITTECH",
    StockName: "KPIT Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-APR-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE04I401011",
    "FACE VALUE": 10
  },
  {
    Symbol: "KPRMILL",
    StockName: "K.P.R. Mill Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-AUG-2007",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE930H01023",
    "FACE VALUE": 5
  },
  {
    Symbol: "KRBL",
    StockName: "KRBL Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-JAN-2002",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE001B01026",
    "FACE VALUE": 1
  },
  {
    Symbol: "KREBSBIO",
    StockName: "Krebs Biochemicals and Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-JAN-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE268B01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "KRIDHANINF",
    StockName: "Kridhan Infra Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-DEC-2015",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE524L01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "KRISHANA",
    StockName: "Krishana Phoschem Limited",
    SERIES: "BE",
    "DATE OF LISTING": "22-AUG-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE506W01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "KSB",
    StockName: "Ksb Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE999A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "KSCL",
    StockName: "Kaveri Seed Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-OCT-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE455I01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "KSERASERA",
    StockName: "KSS Limited",
    SERIES: "BE",
    "DATE OF LISTING": "05-OCT-2006",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE216D01026",
    "FACE VALUE": 1
  },
  {
    Symbol: "KSK",
    StockName: "KSK Energy Ventures Limited",
    SERIES: "BE",
    "DATE OF LISTING": "14-JUL-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE143H01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "KSL",
    StockName: "Kalyani Steels Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-MAY-2010",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE907A01026",
    "FACE VALUE": 5
  },
  {
    Symbol: "KTKBANK",
    StockName: "The Karnataka Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAY-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE614B01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "KUANTUM",
    StockName: "Kuantum Papers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-OCT-2019",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE529I01021",
    "FACE VALUE": 1
  },
  {
    Symbol: "KWALITY",
    StockName: "kwality limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-JUL-2011",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE775B01025",
    "FACE VALUE": 1
  },
  {
    Symbol: "L&TFH",
    StockName: "L&T Finance Holdings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-AUG-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE498L01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "LAKPRE",
    StockName: "Lakshmi Precision Screws Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "26-SEP-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE651C01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "LAKSHVILAS",
    StockName: "Lakshmi Vilas Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-JUN-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE694C01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "LALPATHLAB",
    StockName: "Dr. Lal Path Labs Ltd.",
    SERIES: "EQ",
    "DATE OF LISTING": "23-DEC-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE600L01024",
    "FACE VALUE": 10
  },
  {
    Symbol: "LAMBODHARA",
    StockName: "Lambodhara Textiles Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-FEB-2015",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE112F01022",
    "FACE VALUE": 5
  },
  {
    Symbol: "LAOPALA",
    StockName: "La Opala RG Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-MAR-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE059D01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "LASA",
    StockName: "Lasa Supergenerics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-SEP-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE670X01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "LAURUSLABS",
    StockName: "Laurus Labs Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-DEC-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE947Q01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "LAXMIMACH",
    StockName: "Lakshmi Machine Works Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE269B01029",
    "FACE VALUE": 10
  },
  {
    Symbol: "LEMONTREE",
    StockName: "Lemon Tree Hotels Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-APR-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE970X01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "LFIC",
    StockName: "Lakshmi Finance & Industrial Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-APR-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE850E01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "LGBBROSLTD",
    StockName: "LG Balakrishnan & Bros Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-MAR-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE337A01034",
    "FACE VALUE": 10
  },
  {
    Symbol: "LGBFORGE",
    StockName: "LGB Forge Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-AUG-2008",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE201J01017",
    "FACE VALUE": 1
  },
  {
    Symbol: "LIBAS",
    StockName: "Libas Designs Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-JUL-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE908V01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "LIBERTSHOE",
    StockName: "Liberty Shoes Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-SEP-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE557B01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "LICHSGFIN",
    StockName: "LIC Housing Finance Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-JUL-1998",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE115A01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "LINCOLN",
    StockName: "Lincoln Pharmaceuticals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-DEC-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE405C01035",
    "FACE VALUE": 10
  },
  {
    Symbol: "LINCPEN",
    StockName: "Linc Pen & Plastics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAR-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE802B01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "LINDEINDIA",
    StockName: "Linde India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-JUN-1999",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE473A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "LOKESHMACH",
    StockName: "Lokesh Machines Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-MAY-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE397H01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "LOTUSEYE",
    StockName: "Lotus Eye Hospital and Institute Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-JUL-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE947I01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "LOVABLE",
    StockName: "Lovable Lingerie Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-MAR-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE597L01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "LPDC",
    StockName: "Landmark Property Development Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-AUG-2008",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE197J01017",
    "FACE VALUE": 1
  },
  {
    Symbol: "LSIL",
    StockName: "Lloyds Steels Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-JUL-2016",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE093R01011",
    "FACE VALUE": 1
  },
  {
    Symbol: "LT",
    StockName: "Larsen & Toubro Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-JUN-2004",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE018A01030",
    "FACE VALUE": 2
  },
  {
    Symbol: "LTI",
    StockName: "Larsen & Toubro Infotech Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-JUL-2016",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE214T01019",
    "FACE VALUE": 1
  },
  {
    Symbol: "LTTS",
    StockName: "L&T Technology Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-SEP-2016",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE010V01017",
    "FACE VALUE": 2
  },
  {
    Symbol: "LUMAXIND",
    StockName: "Lumax Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-SEP-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE162B01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "LUMAXTECH",
    StockName: "Lumax Auto Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-JAN-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE872H01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "LUPIN",
    StockName: "Lupin Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-SEP-2001",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE326A01037",
    "FACE VALUE": 2
  },
  {
    Symbol: "LUXIND",
    StockName: "Lux Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-NOV-2015",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE150G01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "LYKALABS",
    StockName: "Lyka Labs Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE933A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "LYPSAGEMS",
    StockName: "Lypsa Gems & Jewellery Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-NOV-2013",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE142K01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "M&M",
    StockName: "Mahindra & Mahindra Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-JAN-1996",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE101A01026",
    "FACE VALUE": 5
  },
  {
    Symbol: "M&MFIN",
    StockName: "Mahindra & Mahindra Financial Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-MAR-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE774D01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "MAANALU",
    StockName: "Maan Aluminium Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-OCT-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE215I01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "MACPOWER",
    StockName: "Macpower CNC Machines Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-AUG-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE155Z01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "MADHAV",
    StockName: "Madhav Marbles and Granites Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-DEC-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE925C01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "MADHUCON",
    StockName: "Madhucon Projects Limited",
    SERIES: "BE",
    "DATE OF LISTING": "05-OCT-2006",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE378D01032",
    "FACE VALUE": 1
  },
  {
    Symbol: "MADRASFERT",
    StockName: "Madras Fertilizers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-JUL-1997",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE414A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "MAGADSUGAR",
    StockName: "Magadh Sugar & Energy Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUL-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE347W01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "MAGMA",
    StockName: "Magma Fincorp Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-APR-2004",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE511C01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "MAGNUM",
    StockName: "Magnum Ventures Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-SEP-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE387I01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "MAHABANK",
    StockName: "Bank of Maharashtra",
    SERIES: "EQ",
    "DATE OF LISTING": "12-APR-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE457A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "MAHAPEXLTD",
    StockName: "Maha Rashtra Apex Corporation Limited",
    SERIES: "BE",
    "DATE OF LISTING": "21-JAN-1998",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE843B01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "MAHASTEEL",
    StockName: "Mahamaya Steel Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-JUL-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE451L01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "MAHEPC",
    StockName: "Mahindra EPC Irrigation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-FEB-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE215D01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "MAHESHWARI",
    StockName: "Maheshwari Logistics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-APR-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE263W01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "MAHINDCIE",
    StockName: "Mahindra CIE Automotive Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-AUG-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE536H01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "MAHLIFE",
    StockName: "Mahindra Lifespace Developers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAY-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE813A01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "MAHLOG",
    StockName: "Mahindra Logistics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-NOV-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE766P01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "MAHSCOOTER",
    StockName: "Maharashtra Scooters Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE288A01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "MAHSEAMLES",
    StockName: "Maharashtra Seamless Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-AUG-2004",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE271B01025",
    "FACE VALUE": 5
  },
  {
    Symbol: "MAITHANALL",
    StockName: "Maithan Alloys Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-JUL-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE683C01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "MAJESCO",
    StockName: "Majesco Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-AUG-2015",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE898S01029",
    "FACE VALUE": 5
  },
  {
    Symbol: "MALUPAPER",
    StockName: "Malu Paper Mills Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-APR-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE383H01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "MANAKALUCO",
    StockName: "Manaksia Aluminium Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-MAR-2015",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE859Q01017",
    "FACE VALUE": 1
  },
  {
    Symbol: "MANAKCOAT",
    StockName: "Manaksia Coated Metals & Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-MAR-2015",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE830Q01018",
    "FACE VALUE": 1
  },
  {
    Symbol: "MANAKSIA",
    StockName: "Manaksia Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-JAN-2008",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE015D01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "MANAKSTEEL",
    StockName: "Manaksia Steels Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-MAR-2015",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE824Q01011",
    "FACE VALUE": 1
  },
  {
    Symbol: "MANALIPETC",
    StockName: "Manali Petrochemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-DEC-2006",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE201A01024",
    "FACE VALUE": 5
  },
  {
    Symbol: "MANAPPURAM",
    StockName: "Manappuram Finance Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-DEC-2014",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE522D01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "MANGALAM",
    StockName: "Mangalam Drugs And Organics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-MAY-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE584F01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "MANGCHEFER",
    StockName: "Mangalore Chemicals & Fertilizers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-OCT-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE558B01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "MANGLMCEM",
    StockName: "Mangalam Cement Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-JAN-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE347A01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "MANGTIMBER",
    StockName: "Mangalam Timber Products Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-JUL-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE805B01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "MANINDS",
    StockName: "Man Industries (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-JUN-2005",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE993A01026",
    "FACE VALUE": 5
  },
  {
    Symbol: "MANINFRA",
    StockName: "Man Infraconstruction Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-MAR-2010",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE949H01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "MANUGRAPH",
    StockName: "Manugraph India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-SEP-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE867A01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "MARALOVER",
    StockName: "Maral Overseas Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE882A01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "MARATHON",
    StockName: "Marathon Nextgen Realty Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-SEP-2016",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE182D01020",
    "FACE VALUE": 5
  },
  {
    Symbol: "MARICO",
    StockName: "Marico Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-MAY-1996",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE196A01026",
    "FACE VALUE": 1
  },
  {
    Symbol: "MARKSANS",
    StockName: "Marksans Pharma Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-JAN-2002",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE750C01026",
    "FACE VALUE": 1
  },
  {
    Symbol: "MARUTI",
    StockName: "Maruti Suzuki India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-JUL-2003",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE585B01010",
    "FACE VALUE": 5
  },
  {
    Symbol: "MASFIN",
    StockName: "MAS Financial Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-OCT-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE348L01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "MASKINVEST",
    StockName: "Mask Investments Limited",
    SERIES: "BE",
    "DATE OF LISTING": "14-OCT-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE885F01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "MASTEK",
    StockName: "Mastek Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAY-1995",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE759A01021",
    "FACE VALUE": 5
  },
  {
    Symbol: "MATRIMONY",
    StockName: "Matrimony.Com Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-SEP-2017",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE866R01028",
    "FACE VALUE": 5
  },
  {
    Symbol: "MAWANASUG",
    StockName: "Mawana Sugars Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-MAR-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE636A01039",
    "FACE VALUE": 10
  },
  {
    Symbol: "MAXHEALTH",
    StockName: "Max Healthcare Institute Limited",
    SERIES: "BE",
    "DATE OF LISTING": "21-AUG-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE027H01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "MAXVIL",
    StockName: "Max Ventures and Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-JUN-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE154U01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "MAYURUNIQ",
    StockName: "Mayur Uniquoters Ltd",
    SERIES: "EQ",
    "DATE OF LISTING": "25-SEP-2012",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE040D01038",
    "FACE VALUE": 5
  },
  {
    Symbol: "MAZDA",
    StockName: "Mazda Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-NOV-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE885E01034",
    "FACE VALUE": 10
  },
  {
    Symbol: "MBAPL",
    StockName: "Madhya Bharat Agro Products Limited",
    SERIES: "BE",
    "DATE OF LISTING": "22-AUG-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE900L01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "MBECL",
    StockName: "Mcnally Bharat Engineering Company Limited",
    SERIES: "BE",
    "DATE OF LISTING": "06-OCT-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE748A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "MBLINFRA",
    StockName: "MBL Infrastructures Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-JAN-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE912H01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "MCDHOLDING",
    StockName: "McDowell Holdings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-MAY-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE836H01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "MCDOWELL-N",
    StockName: "United Spirits Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-SEP-2001",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE854D01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "MCL",
    StockName: "Madhav Copper Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-AUG-2020",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE813V01022",
    "FACE VALUE": 5
  },
  {
    Symbol: "MCLEODRUSS",
    StockName: "Mcleod Russel India Limited",
    SERIES: "BE",
    "DATE OF LISTING": "29-JUL-2005",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE942G01012",
    "FACE VALUE": 5
  },
  {
    Symbol: "MCX",
    StockName: "Multi Commodity Exchange of India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAR-2012",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE745G01035",
    "FACE VALUE": 10
  },
  {
    Symbol: "MEGASOFT",
    StockName: "Megasoft Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-JUL-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE933B01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "MEGH",
    StockName: "Meghmani Organics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUN-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE974H01013",
    "FACE VALUE": 1
  },
  {
    Symbol: "MELSTAR",
    StockName: "Melstar Information Technologies Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "07-MAR-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE817A01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "MENONBE",
    StockName: "Menon Bearings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAR-2015",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE071D01033",
    "FACE VALUE": 1
  },
  {
    Symbol: "MEP",
    StockName: "MEP Infrastructure Developers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-MAY-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE776I01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "MERCATOR",
    StockName: "Mercator Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-JUN-2005",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE934B01028",
    "FACE VALUE": 1
  },
  {
    Symbol: "METALFORGE",
    StockName: "Metalyst Forgings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-AUG-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE425A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "METKORE",
    StockName: "Metkore Alloys & Industries Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "30-JUN-2008",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE592I01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "METROPOLIS",
    StockName: "Metropolis Healthcare Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-APR-2019",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE112L01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "MFSL",
    StockName: "Max Financial Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-MAY-2000",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE180A01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "MGL",
    StockName: "Mahanagar Gas Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-JUL-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE002S01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "MHRIL",
    StockName: "Mahindra Holidays & Resorts India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-JUL-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE998I01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "MIC",
    StockName: "MIC Electronics Limited",
    SERIES: "BE",
    "DATE OF LISTING": "30-MAY-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE287C01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "MIDHANI",
    StockName: "Mishra Dhatu Nigam Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-APR-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE099Z01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "MINDACORP",
    StockName: "Minda Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-OCT-2014",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE842C01021",
    "FACE VALUE": 2
  },
  {
    Symbol: "MINDAIND",
    StockName: "Minda Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-FEB-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE405E01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "MINDTECK",
    StockName: "Mindteck (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-AUG-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE110B01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "MINDTREE",
    StockName: "MindTree Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-MAR-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE018I01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "MIRCELECTR",
    StockName: "MIRC Electronics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-MAY-2004",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE831A01028",
    "FACE VALUE": 1
  },
  {
    Symbol: "MIRZAINT",
    StockName: "Mirza International Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-APR-1999",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE771A01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "MITTAL",
    StockName: "Mittal Life Style Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-APR-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE997Y01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "MMFL",
    StockName: "MM Forgings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-DEC-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE227C01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "MMP",
    StockName: "MMP Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-JAN-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE511Y01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "MMTC",
    StockName: "MMTC Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-APR-2012",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE123F01029",
    "FACE VALUE": 1
  },
  {
    Symbol: "MODIRUBBER",
    StockName: "Modi Rubber Limited",
    SERIES: "BE",
    "DATE OF LISTING": "07-FEB-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE832A01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "MOHITIND",
    StockName: "Mohit Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-MAR-2013",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE954E01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "MOHOTAIND",
    StockName: "Mohota Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-APR-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 100,
    "ISIN NUMBER": "INE313D01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "MOIL",
    StockName: "MOIL Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-DEC-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE490G01020",
    "FACE VALUE": 10
  },
  {
    Symbol: "MOLDTECH",
    StockName: "Mold-Tek Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-JUL-2016",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE835B01035",
    "FACE VALUE": 2
  },
  {
    Symbol: "MOLDTKPAC",
    StockName: "Mold-Tek Packaging Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-FEB-2015",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE893J01029",
    "FACE VALUE": 5
  },
  {
    Symbol: "MONTECARLO",
    StockName: "Monte Carlo Fashions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-DEC-2014",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE950M01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "MORARJEE",
    StockName: "Morarjee Textiles Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-SEP-2012",
    "PAID UP VALUE": 7,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE161G01027",
    "FACE VALUE": 7
  },
  {
    Symbol: "MOREPENLAB",
    StockName: "Morepen Laboratories Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-NOV-1999",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE083A01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "MOTHERSUMI",
    StockName: "Motherson Sumi Systems Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-AUG-1996",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE775A01035",
    "FACE VALUE": 1
  },
  {
    Symbol: "MOTILALOFS",
    StockName: "Motilal Oswal Financial Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-SEP-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE338I01027",
    "FACE VALUE": 1
  },
  {
    Symbol: "MOTOGENFIN",
    StockName: "The Motor & General Finance Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE861B01023",
    "FACE VALUE": 5
  },
  {
    Symbol: "MPHASIS",
    StockName: "MphasiS Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-JUN-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE356A01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "MPSLTD",
    StockName: "MPS Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-JAN-2002",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE943D01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "MRF",
    StockName: "MRF Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-SEP-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE883A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "MRO-TEK",
    StockName: "MRO-TEK Realty Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-NOV-2000",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE398B01018",
    "FACE VALUE": 5
  },
  {
    Symbol: "MRPL",
    StockName: "Mangalore Refinery and Petrochemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-JAN-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE103A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "MSPL",
    StockName: "MSP Steel & Power Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-JUL-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE752G01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "MSTCLTD",
    StockName: "Mstc Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAR-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE255X01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "MTEDUCARE",
    StockName: "MT Educare Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-APR-2012",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE472M01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "MTNL",
    StockName: "Mahanagar Telephone Nigam Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-FEB-1999",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE153A01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "MUKANDENGG",
    StockName: "Mukand Engineers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUN-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE022B01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "MUKANDLTD",
    StockName: "Mukand Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-FEB-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE304A01026",
    "FACE VALUE": 10
  },
  {
    Symbol: "MUKTAARTS",
    StockName: "Mukta Arts Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-SEP-2000",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE374B01019",
    "FACE VALUE": 5
  },
  {
    Symbol: "MUNJALAU",
    StockName: "Munjal Auto Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-JUL-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE672B01032",
    "FACE VALUE": 2
  },
  {
    Symbol: "MUNJALSHOW",
    StockName: "Munjal Showa Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-MAY-2003",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE577A01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "MURUDCERA",
    StockName: "Murudeshwar Ceramics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-MAY-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE692B01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "MUTHOOTCAP",
    StockName: "Muthoot Capital Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-AUG-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE296G01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "MUTHOOTFIN",
    StockName: "Muthoot Finance Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-MAY-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE414G01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "NACLIND",
    StockName: "NACL Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-APR-2017",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE295D01020",
    "FACE VALUE": 1
  },
  {
    Symbol: "NAGAFERT",
    StockName: "Nagarjuna Fertilizers and Chemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-JUN-2016",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE454M01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "NAGREEKCAP",
    StockName: "Nagreeka Capital & Infrastructure Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-SEP-2007",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE245I01016",
    "FACE VALUE": 5
  },
  {
    Symbol: "NAGREEKEXP",
    StockName: "Nagreeka Exports Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-JUN-2007",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE123B01028",
    "FACE VALUE": 5
  },
  {
    Symbol: "NAHARCAP",
    StockName: "Nahar Capital and Financial Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-MAR-2008",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE049I01012",
    "FACE VALUE": 5
  },
  {
    Symbol: "NAHARINDUS",
    StockName: "Nahar Industrial Enterprises Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-DEC-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE289A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "NAHARPOLY",
    StockName: "Nahar Poly Films Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-MAR-2007",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE308A01027",
    "FACE VALUE": 5
  },
  {
    Symbol: "NAHARSPING",
    StockName: "Nahar Spinning Mills Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-MAR-2007",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE290A01027",
    "FACE VALUE": 5
  },
  {
    Symbol: "NAM-INDIA",
    StockName: "Nippon Life India Asset Management Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-NOV-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE298J01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "NATCOPHARM",
    StockName: "Natco Pharma Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-DEC-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE987B01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "NATHBIOGEN",
    StockName: "Nath Bio-Genes (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JAN-2014",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE448G01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "NATIONALUM",
    StockName: "National Aluminium Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-APR-1999",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE139A01034",
    "FACE VALUE": 5
  },
  {
    Symbol: "NATNLSTEEL",
    StockName: "National Steel And Agro Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-SEP-2002",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE088B01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "NAUKRI",
    StockName: "Info Edge (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-NOV-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE663F01024",
    "FACE VALUE": 10
  },
  {
    Symbol: "NAVINFLUOR",
    StockName: "Navin Fluorine International Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-JUN-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE048G01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "NAVKARCORP",
    StockName: "Navkar Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-SEP-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE278M01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "NAVNETEDUL",
    StockName: "Navneet Education Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE060A01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "NBCC",
    StockName: "NBCC (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-APR-2012",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE095N01031",
    "FACE VALUE": 1
  },
  {
    Symbol: "NBIFIN",
    StockName: "N. B. I. Industrial Finance Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-NOV-2016",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE365I01020",
    "FACE VALUE": 5
  },
  {
    Symbol: "NBVENTURES",
    StockName: "Nava Bharat Ventures Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-APR-1996",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE725A01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "NCC",
    StockName: "NCC Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-OCT-2003",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE868B01028",
    "FACE VALUE": 2
  },
  {
    Symbol: "NCLIND",
    StockName: "NCL Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-APR-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE732C01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "NDGL",
    StockName: "Naga Dhunseri Group Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-AUG-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE756C01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "NDL",
    StockName: "Nandan Denim Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-MAR-2012",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE875G01030",
    "FACE VALUE": 10
  },
  {
    Symbol: "NDRAUTO",
    StockName: "Ndr Auto Components Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-JUL-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE07OG01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "NDTV",
    StockName: "New Delhi Television Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-MAY-2004",
    "PAID UP VALUE": 4,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE155G01029",
    "FACE VALUE": 4
  },
  {
    Symbol: "NECCLTD",
    StockName: "North Eastern Carrying Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-MAR-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE553C01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "NECLIFE",
    StockName: "Nectar Lifesciences Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-JUL-2005",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE023H01027",
    "FACE VALUE": 1
  },
  {
    Symbol: "NELCAST",
    StockName: "Nelcast Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-JUN-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE189I01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "NELCO",
    StockName: "NELCO Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-MAY-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE045B01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "NEOGEN",
    StockName: "Neogen Chemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-MAY-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE136S01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "NESCO",
    StockName: "Nesco Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-APR-2008",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE317F01035",
    "FACE VALUE": 2
  },
  {
    Symbol: "NESTLEIND",
    StockName: "Nestle India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-JAN-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE239A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "NETWORK18",
    StockName: "Network18 Media & Investments Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-FEB-2007",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE870H01013",
    "FACE VALUE": 5
  },
  {
    Symbol: "NEULANDLAB",
    StockName: "Neuland Laboratories Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-OCT-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE794A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "NEWGEN",
    StockName: "Newgen Software Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-JAN-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE619B01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "NEXTMEDIA",
    StockName: "Next Mediaworks Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-APR-2001",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE747B01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "NFL",
    StockName: "National Fertilizers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-DEC-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE870D01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "NH",
    StockName: "Narayana Hrudayalaya Ltd.",
    SERIES: "EQ",
    "DATE OF LISTING": "06-JAN-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE410P01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "NHPC",
    StockName: "NHPC Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-SEP-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE848E01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "NIACL",
    StockName: "The New India Assurance Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-NOV-2017",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE470Y01017",
    "FACE VALUE": 5
  },
  {
    Symbol: "NIBL",
    StockName: "NRB Industrial Bearings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-APR-2013",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE047O01014",
    "FACE VALUE": 2
  },
  {
    Symbol: "NIITLTD",
    StockName: "NIIT Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-AUG-2004",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE161A01038",
    "FACE VALUE": 2
  },
  {
    Symbol: "NILAINFRA",
    StockName: "Nila Infrastructures Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-MAY-2015",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE937C01029",
    "FACE VALUE": 1
  },
  {
    Symbol: "NILASPACES",
    StockName: "Nila Spaces Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-DEC-2018",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE00S901012",
    "FACE VALUE": 1
  },
  {
    Symbol: "NILKAMAL",
    StockName: "Nilkamal Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-NOV-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE310A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "NIPPOBATRY",
    StockName: "Indo-National Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-OCT-1999",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE567A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "NIRAJISPAT",
    StockName: "Niraj Ispat Industries Limited",
    SERIES: "BE",
    "DATE OF LISTING": "27-OCT-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE326T01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "NITCO",
    StockName: "Nitco Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-MAR-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE858F01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "NITINFIRE",
    StockName: "Nitin Fire Protection Industries Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "05-JUN-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE489H01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "NITINSPIN",
    StockName: "Nitin Spinners Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-FEB-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE229H01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "NKIND",
    StockName: "NK Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-JUL-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE542C01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "NLCINDIA",
    StockName: "NLC India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-AUG-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE589A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "NMDC",
    StockName: "NMDC Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-MAR-2008",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE584A01023",
    "FACE VALUE": 1
  },
  {
    Symbol: "NOCIL",
    StockName: "NOCIL Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-JAN-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE163A01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "NOIDATOLL",
    StockName: "Noida Toll Bridge Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-DEC-2002",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE781B01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "NORBTEAEXP",
    StockName: "Norben Tea & Exports Limited",
    SERIES: "BE",
    "DATE OF LISTING": "26-JUN-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE369C01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "NRAIL",
    StockName: "N R Agarwal Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-APR-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE740D01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "NRBBEARING",
    StockName: "NRB Bearing Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-MAR-2000",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE349A01021",
    "FACE VALUE": 2
  },
  {
    Symbol: "NSIL",
    StockName: "Nalwa Sons Investments Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-NOV-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE023A01030",
    "FACE VALUE": 10
  },
  {
    Symbol: "NTL",
    StockName: "Neueon Towers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-SEP-2013",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE333I01036",
    "FACE VALUE": 10
  },
  {
    Symbol: "NTPC",
    StockName: "NTPC Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-NOV-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE733E01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "NUCLEUS",
    StockName: "Nucleus Software Exports Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-DEC-2002",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE096B01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "NXTDIGITAL",
    StockName: "NXTDIGITAL LIMITED",
    SERIES: "EQ",
    "DATE OF LISTING": "24-APR-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE353A01023",
    "FACE VALUE": 10
  },
  {
    Symbol: "OAL",
    StockName: "Oriental Aromatics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-JUL-2019",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE959C01023",
    "FACE VALUE": 5
  },
  {
    Symbol: "OBEROIRLTY",
    StockName: "Oberoi Realty Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-OCT-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE093I01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "OCCL",
    StockName: "Oriental Carbon & Chemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-JAN-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE321D01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "OFSS",
    StockName: "Oracle Financial Services Software Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUN-2002",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE881D01027",
    "FACE VALUE": 5
  },
  {
    Symbol: "OIL",
    StockName: "Oil India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-SEP-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE274J01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "OILCOUNTUB",
    StockName: "Oil Country Tubular Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-AUG-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE591A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "OISL",
    StockName: "OCL Iron and Steel Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-AUG-2008",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE196J01019",
    "FACE VALUE": 1
  },
  {
    Symbol: "OLECTRA",
    StockName: "Olectra Greentech Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-MAR-2002",
    "PAID UP VALUE": 4,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE260D01016",
    "FACE VALUE": 4
  },
  {
    Symbol: "OMAXAUTO",
    StockName: "Omax Autos Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-FEB-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE090B01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "OMAXE",
    StockName: "Omaxe Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-AUG-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE800H01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "OMKARCHEM",
    StockName: "Omkar Speciality Chemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-FEB-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE474L01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "OMMETALS",
    StockName: "OM Metals Infraprojects Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-JUN-2011",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE239D01028",
    "FACE VALUE": 1
  },
  {
    Symbol: "ONELIFECAP",
    StockName: "Onelife Capital Advisors Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-OCT-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE912L01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "ONEPOINT",
    StockName: "One Point One Solutions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAY-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE840Y01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "ONGC",
    StockName: "Oil & Natural Gas Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-JUL-1995",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE213A01029",
    "FACE VALUE": 5
  },
  {
    Symbol: "ONMOBILE",
    StockName: "OnMobile Global Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-FEB-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE809I01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "ONWARDTEC",
    StockName: "Onward Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-MAR-2001",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE229A01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "OPTIEMUS",
    StockName: "Optiemus Infracom Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-AUG-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE350C01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "OPTOCIRCUI",
    StockName: "Opto Circuits (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-AUG-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE808B01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "ORBTEXP",
    StockName: "Orbit Exports Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-NOV-2013",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE231G01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "ORICONENT",
    StockName: "Oricon Enterprises Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-JUL-2015",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE730A01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "ORIENTABRA",
    StockName: "Orient Abrasives Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-DEC-2005",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE569C01020",
    "FACE VALUE": 1
  },
  {
    Symbol: "ORIENTALTL",
    StockName: "Oriental Trimex Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-MAR-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE998H01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "ORIENTBELL",
    StockName: "Orient Bell Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-FEB-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE607D01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "ORIENTCEM",
    StockName: "Orient Cement Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-JUL-2013",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE876N01018",
    "FACE VALUE": 1
  },
  {
    Symbol: "ORIENTELEC",
    StockName: "Orient Electric Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-MAY-2018",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE142Z01019",
    "FACE VALUE": 1
  },
  {
    Symbol: "ORIENTHOT",
    StockName: "Oriental Hotels Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-AUG-1998",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE750A01020",
    "FACE VALUE": 1
  },
  {
    Symbol: "ORIENTLTD",
    StockName: "Orient Press Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-MAR-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE609C01024",
    "FACE VALUE": 10
  },
  {
    Symbol: "ORIENTPPR",
    StockName: "Orient Paper & Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAR-1995",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE592A01026",
    "FACE VALUE": 1
  },
  {
    Symbol: "ORIENTREF",
    StockName: "Orient Refractories Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-MAR-2012",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE743M01012",
    "FACE VALUE": 1
  },
  {
    Symbol: "ORISSAMINE",
    StockName: "The Orissa Minerals Development Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-SEP-2010",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE725E01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "ORTEL",
    StockName: "Ortel Communications Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "19-MAR-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE849L01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "ORTINLABSS",
    StockName: "Ortin Laboratories Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-AUG-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE749B01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "OSWALAGRO",
    StockName: "Oswal Agro Mills Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE142A01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "PAEL",
    StockName: "PAE Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-APR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE766A01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "PAGEIND",
    StockName: "Page Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-MAR-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE761H01022",
    "FACE VALUE": 10
  },
  {
    Symbol: "PAISALO",
    StockName: "Paisalo Digital Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-OCT-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE420C01042",
    "FACE VALUE": 10
  },
  {
    Symbol: "PALASHSECU",
    StockName: "Palash Securities Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUL-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE471W01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "PALREDTEC",
    StockName: "Palred Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAY-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE218G01033",
    "FACE VALUE": 10
  },
  {
    Symbol: "PANACEABIO",
    StockName: "Panacea Biotec Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-APR-1996",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE922B01023",
    "FACE VALUE": 1
  },
  {
    Symbol: "PANACHE",
    StockName: "Panache Digilife Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-JAN-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE895W01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "PANAMAPET",
    StockName: "Panama Petrochem Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-SEP-2011",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE305C01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "PAPERPROD",
    StockName: "Huhtamaki PPL Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-OCT-2004",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE275B01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "PARABDRUGS",
    StockName: "Parabolic Drugs Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "01-JUL-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE618H01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "PARACABLES",
    StockName: "Paramount Communications Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-JAN-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE074B01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "PARAGMILK",
    StockName: "Parag Milk Foods Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-MAY-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE883N01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "PARSVNATH",
    StockName: "Parsvnath Developers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-NOV-2006",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE561H01026",
    "FACE VALUE": 5
  },
  {
    Symbol: "PATELENG",
    StockName: "Patel Engineering Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-FEB-2005",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE244B01030",
    "FACE VALUE": 1
  },
  {
    Symbol: "PATINTLOG",
    StockName: "Patel Integrated Logistics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-JAN-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE529D01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "PATSPINLTD",
    StockName: "Patspin India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAY-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE790C01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "PCJEWELLER",
    StockName: "PC Jeweller Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-DEC-2012",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE785M01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "PDMJEPAPER",
    StockName: "Pudumjee Paper Products Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-MAR-2016",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE865T01018",
    "FACE VALUE": 1
  },
  {
    Symbol: "PDSMFL",
    StockName: "PDS Multinational Fashions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-OCT-2014",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE111Q01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "PEARLPOLY",
    StockName: "Pearl Polymers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-OCT-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE844A01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "PEL",
    StockName: "Piramal Enterprises Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE140A01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "PENIND",
    StockName: "Pennar Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-NOV-2010",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE932A01024",
    "FACE VALUE": 5
  },
  {
    Symbol: "PENINLAND",
    StockName: "Peninsula Land Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE138A01028",
    "FACE VALUE": 2
  },
  {
    Symbol: "PERSISTENT",
    StockName: "Persistent Systems Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-APR-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE262H01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "PETRONET",
    StockName: "Petronet LNG Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-MAR-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE347G01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "PFC",
    StockName: "Power Finance Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-FEB-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE134E01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "PFIZER",
    StockName: "Pfizer Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-APR-1999",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE182A01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "PFOCUS",
    StockName: "Prime Focus Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-JUN-2006",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE367G01038",
    "FACE VALUE": 1
  },
  {
    Symbol: "PFS",
    StockName: "PTC India Financial Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-MAR-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE560K01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "PGEL",
    StockName: "PG Electroplast Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-SEP-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE457L01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "PGHH",
    StockName: "Procter & Gamble Hygiene and Health Care Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-JUL-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE179A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "PGHL",
    StockName: "Procter & Gamble Health Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-APR-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE199A01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "PGIL",
    StockName: "Pearl Global Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-FEB-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE940H01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "PHILIPCARB",
    StockName: "Phillips Carbon Black Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAR-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE602A01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "PHOENIXLTD",
    StockName: "The Phoenix Mills Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-APR-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE211B01039",
    "FACE VALUE": 2
  },
  {
    Symbol: "PIDILITIND",
    StockName: "Pidilite Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAR-1995",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE318A01026",
    "FACE VALUE": 1
  },
  {
    Symbol: "PIIND",
    StockName: "PI Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-JUN-2011",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE603J01030",
    "FACE VALUE": 1
  },
  {
    Symbol: "PILANIINVS",
    StockName: "Pilani Investment and Industries Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-DEC-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE417C01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "PILITA",
    StockName: "PIL ITALICA LIFESTYLE LIMITED",
    SERIES: "EQ",
    "DATE OF LISTING": "07-OCT-2013",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE600A01035",
    "FACE VALUE": 1
  },
  {
    Symbol: "PIONDIST",
    StockName: "Pioneer Distilleries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-JUN-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE889E01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "PIONEEREMB",
    StockName: "Pioneer Embroideries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-MAY-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE156C01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "PITTIENG",
    StockName: "Pitti Engineering Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-FEB-2007",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE450D01021",
    "FACE VALUE": 5
  },
  {
    Symbol: "PKTEA",
    StockName: "The Peria Karamalai Tea & Produce Company Limited",
    SERIES: "BE",
    "DATE OF LISTING": "19-AUG-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE431F01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "PLASTIBLEN",
    StockName: "Plastiblends India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-DEC-2006",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE083C01022",
    "FACE VALUE": 5
  },
  {
    Symbol: "PNB",
    StockName: "Punjab National Bank",
    SERIES: "EQ",
    "DATE OF LISTING": "24-APR-2002",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE160A01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "PNBGILTS",
    StockName: "PNB Gilts Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-SEP-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE859A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "PNBHOUSING",
    StockName: "PNB Housing Finance Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-NOV-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE572E01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "PNC",
    StockName: "Pritish Nandy Communications Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-DEC-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE392B01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "PNCINFRA",
    StockName: "PNC Infratech Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-MAY-2015",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE195J01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "PODDARHOUS",
    StockName: "Poddar Housing and Development Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-APR-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE888B01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "PODDARMENT",
    StockName: "Poddar Pigments Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-NOV-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE371C01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "POKARNA",
    StockName: "Pokarna Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-JUL-2016",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE637C01025",
    "FACE VALUE": 2
  },
  {
    Symbol: "POLYCAB",
    StockName: "Polycab India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-APR-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE455K01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "POLYMED",
    StockName: "Poly Medicure Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-DEC-2011",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE205C01021",
    "FACE VALUE": 5
  },
  {
    Symbol: "POLYPLEX",
    StockName: "Polyplex Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-APR-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE633B01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "PONNIERODE",
    StockName: "Ponni Sugars (Erode) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-APR-2002",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE838E01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "POWERGRID",
    StockName: "Power Grid Corporation of India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-OCT-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE752E01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "POWERINDIA",
    StockName: "ABB Power Products and Systems India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-MAR-2020",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE07Y701011",
    "FACE VALUE": 2
  },
  {
    Symbol: "POWERMECH",
    StockName: "Power Mech Projects Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-AUG-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE211R01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "PPAP",
    StockName: "PPAP Automotive Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-JAN-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE095I01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "PPL",
    StockName: "Prakash Pipes Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-JUN-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE050001010",
    "FACE VALUE": 10
  },
  {
    Symbol: "PRABHAT",
    StockName: "Prabhat Dairy Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-SEP-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE302M01033",
    "FACE VALUE": 10
  },
  {
    Symbol: "PRADIP",
    StockName: "Pradip Overseas Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-APR-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE495J01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "PRAENG",
    StockName: "Prajay Engineers Syndicate Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-JAN-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE505C01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "PRAJIND",
    StockName: "Praj Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-OCT-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE074A01025",
    "FACE VALUE": 2
  },
  {
    Symbol: "PRAKASH",
    StockName: "Prakash Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAY-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE603A01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "PRAKASHSTL",
    StockName: "Prakash Steelage Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-AUG-2010",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE696K01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "PRAXIS",
    StockName: "Praxis Home Retail Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-JAN-2018",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE546Y01022",
    "FACE VALUE": 5
  },
  {
    Symbol: "PRECAM",
    StockName: "Precision Camshafts Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE484I01029",
    "FACE VALUE": 10
  },
  {
    Symbol: "PRECOT",
    StockName: "Precot Meridian Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-AUG-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE283A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "PRECWIRE",
    StockName: "Precision Wires India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-SEP-1995",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE372C01029",
    "FACE VALUE": 5
  },
  {
    Symbol: "PREMEXPLN",
    StockName: "Premier Explosives Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-JUN-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE863B01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "PREMIER",
    StockName: "Premier Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-APR-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE342A01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "PREMIERPOL",
    StockName: "Premier Polyfilm Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-DEC-1995",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE309M01012",
    "FACE VALUE": 5
  },
  {
    Symbol: "PRESSMN",
    StockName: "Pressman Advertising Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-JAN-2005",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE980A01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "PRESTIGE",
    StockName: "Prestige Estates Projects Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-OCT-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE811K01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "PRICOLLTD",
    StockName: "Pricol Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-FEB-2017",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE726V01018",
    "FACE VALUE": 1
  },
  {
    Symbol: "PRIMESECU",
    StockName: "Prime Securities Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-JUN-2005",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE032B01021",
    "FACE VALUE": 5
  },
  {
    Symbol: "PRINCEPIPE",
    StockName: "Prince Pipes And Fittings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-DEC-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE689W01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "PROSEED",
    StockName: "Proseed India Limited",
    SERIES: "BE",
    "DATE OF LISTING": "16-OCT-2012",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE217G01027",
    "FACE VALUE": 1
  },
  {
    Symbol: "PROZONINTU",
    StockName: "Prozone Intu Properties Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-SEP-2012",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE195N01013",
    "FACE VALUE": 2
  },
  {
    Symbol: "PRSMJOHNSN",
    StockName: "Prism Johnson Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-AUG-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE010A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "PSB",
    StockName: "Punjab & Sind Bank",
    SERIES: "EQ",
    "DATE OF LISTING": "30-DEC-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE608A01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "PSL",
    StockName: "PSL Limited",
    SERIES: "BE",
    "DATE OF LISTING": "29-MAY-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE474B01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "PSPPROJECT",
    StockName: "PSP Projects Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAY-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE488V01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "PTC",
    StockName: "PTC India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-APR-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE877F01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "PTL",
    StockName: "PTL Enterprises Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-JAN-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE034D01031",
    "FACE VALUE": 2
  },
  {
    Symbol: "PUNJABCHEM",
    StockName: "Punjab Chemicals & Crop Protection Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-MAR-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE277B01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "PUNJLLOYD",
    StockName: "Punj Lloyd Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "06-JAN-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE701B01021",
    "FACE VALUE": 2
  },
  {
    Symbol: "PURVA",
    StockName: "Puravankara Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-AUG-2007",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE323I01011",
    "FACE VALUE": 5
  },
  {
    Symbol: "PVR",
    StockName: "PVR Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-JAN-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE191H01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "QUESS",
    StockName: "Quess Corp Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-JUL-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE615P01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "QUICKHEAL",
    StockName: "Quick Heal Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-FEB-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE306L01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "RADAAN",
    StockName: "Radaan Mediaworks India Limited",
    SERIES: "BE",
    "DATE OF LISTING": "27-FEB-2003",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE874F01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "RADICO",
    StockName: "Radico Khaitan Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-JUN-2003",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE944F01028",
    "FACE VALUE": 2
  },
  {
    Symbol: "RADIOCITY",
    StockName: "Music Broadcast Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-MAR-2017",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE919I01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "RAIN",
    StockName: "Rain Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-MAR-2008",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE855B01025",
    "FACE VALUE": 2
  },
  {
    Symbol: "RAJESHEXPO",
    StockName: "Rajesh Exports Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-FEB-2000",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE343B01030",
    "FACE VALUE": 1
  },
  {
    Symbol: "RAJRATAN",
    StockName: "Rajratan Global Wire Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-MAY-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE451D01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "RAJRAYON",
    StockName: "Raj Rayon Industries Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "04-JAN-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE533D01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "RAJSREESUG",
    StockName: "Rajshree Sugars & Chemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE562B01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "RAJTV",
    StockName: "Raj Television Network Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-MAR-2007",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE952H01027",
    "FACE VALUE": 5
  },
  {
    Symbol: "RALLIS",
    StockName: "Rallis India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-APR-1999",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE613A01020",
    "FACE VALUE": 1
  },
  {
    Symbol: "RAMANEWS",
    StockName: "Shree Rama Newsprint Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-SEP-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE278B01020",
    "FACE VALUE": 10
  },
  {
    Symbol: "RAMASTEEL",
    StockName: "Rama Steel Tubes Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-AUG-2015",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE230R01027",
    "FACE VALUE": 5
  },
  {
    Symbol: "RAMCOCEM",
    StockName: "The Ramco Cements Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-APR-1997",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE331A01037",
    "FACE VALUE": 1
  },
  {
    Symbol: "RAMCOIND",
    StockName: "Ramco Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-NOV-1996",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE614A01028",
    "FACE VALUE": 1
  },
  {
    Symbol: "RAMCOSYS",
    StockName: "Ramco Systems Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-APR-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE246B01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "RAMKY",
    StockName: "Ramky Infrastructure Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-OCT-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE874I01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "RAMSARUP",
    StockName: "Ramsarup Industries Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "09-JUL-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE005D01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "RANASUG",
    StockName: "Rana Sugars Limited",
    SERIES: "BE",
    "DATE OF LISTING": "24-FEB-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE625B01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "RANEENGINE",
    StockName: "Rane Engine Valve Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-JUN-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE222J01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "RANEHOLDIN",
    StockName: "Rane Holdings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-SEP-1997",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE384A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "RATNAMANI",
    StockName: "Ratnamani Metals & Tubes Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAY-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE703B01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "RAYMOND",
    StockName: "Raymond Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-OCT-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE301A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "RBL",
    StockName: "Rane Brake Lining Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-JUN-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE244J01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "RBLBANK",
    StockName: "RBL Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-AUG-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE976G01028",
    "FACE VALUE": 10
  },
  {
    Symbol: "RCF",
    StockName: "Rashtriya Chemicals and Fertilizers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-JAN-1998",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE027A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "RCOM",
    StockName: "Reliance Communications Limited",
    SERIES: "BE",
    "DATE OF LISTING": "06-MAR-2006",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE330H01018",
    "FACE VALUE": 5
  },
  {
    Symbol: "RECLTD",
    StockName: "REC Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-MAR-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE020B01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "REDINGTON",
    StockName: "Redington (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-FEB-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE891D01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "REFEX",
    StockName: "Refex Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-DEC-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE056I01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "RELAXO",
    StockName: "Relaxo Footwears Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-JUN-2011",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE131B01039",
    "FACE VALUE": 1
  },
  {
    Symbol: "RELCAPITAL",
    StockName: "Reliance Capital Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-NOV-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE013A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "RELIANCE",
    StockName: "Reliance Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-NOV-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE002A01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "RELIGARE",
    StockName: "Religare Enterprises Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-NOV-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE621H01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "RELINFRA",
    StockName: "Reliance Infrastructure Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE036A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "REMSONSIND",
    StockName: "Remsons Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-JAN-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE474C01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "RENUKA",
    StockName: "Shree Renuka Sugars Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "31-OCT-2005",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE087H01022",
    "FACE VALUE": 1
  },
  {
    Symbol: "REPCOHOME",
    StockName: "Repco Home Finance Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-APR-2013",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE612J01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "REPRO",
    StockName: "Repro India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-DEC-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE461B01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "RESPONIND",
    StockName: "Responsive Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-OCT-2010",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE688D01026",
    "FACE VALUE": 1
  },
  {
    Symbol: "REVATHI",
    StockName: "Revathi Equipment Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-AUG-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE617A01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "RGL",
    StockName: "Renaissance Global Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-DEC-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE722H01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "RHFL",
    StockName: "Reliance Home Finance Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-SEP-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE217K01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "RICOAUTO",
    StockName: "Rico Auto Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-MAY-2003",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE209B01025",
    "FACE VALUE": 1
  },
  {
    Symbol: "RIIL",
    StockName: "Reliance Industrial Infrastructure Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-NOV-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE046A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "RITES",
    StockName: "RITES Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-JUL-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE320J01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "RKDL",
    StockName: "Ravi Kumar Distilleries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-DEC-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE722J01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "RKFORGE",
    StockName: "Ramkrishna Forgings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-MAY-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE399G01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "RMCL",
    StockName: "Radha Madhav Corporation Limited",
    SERIES: "BE",
    "DATE OF LISTING": "26-NOV-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE172H01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "RML",
    StockName: "Rane (Madras) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-AUG-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE050H01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "RNAVAL",
    StockName: "Reliance Naval and Engineering Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-OCT-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE542F01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "ROHITFERRO",
    StockName: "Rohit Ferro-Tech Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-APR-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE248H01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "ROHLTD",
    StockName: "Royal Orchid Hotels Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-FEB-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE283H01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "ROLLT",
    StockName: "Rollatainers Limited",
    SERIES: "BE",
    "DATE OF LISTING": "22-NOV-2016",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE927A01040",
    "FACE VALUE": 1
  },
  {
    Symbol: "ROLTA",
    StockName: "Rolta India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-MAR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE293A01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "ROSSARI",
    StockName: "Rossari Biotech Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-JUL-2020",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE02A801020",
    "FACE VALUE": 2
  },
  {
    Symbol: "ROSSELLIND",
    StockName: "Rossell India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-SEP-2012",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE847C01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "RPGLIFE",
    StockName: "RPG Life Sciences Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-JUN-2008",
    "PAID UP VALUE": 8,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE105J01010",
    "FACE VALUE": 8
  },
  {
    Symbol: "RPOWER",
    StockName: "Reliance Power Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-FEB-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE614G01033",
    "FACE VALUE": 10
  },
  {
    Symbol: "RPPINFRA",
    StockName: "R.P.P. Infra Projects Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-DEC-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE324L01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "RSSOFTWARE",
    StockName: "R. S. Software (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-MAY-1999",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE165B01029",
    "FACE VALUE": 5
  },
  {
    Symbol: "RSWM",
    StockName: "RSWM Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-FEB-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE611A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "RSYSTEMS",
    StockName: "R Systems International Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-APR-2006",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE411H01032",
    "FACE VALUE": 1
  },
  {
    Symbol: "RTNINFRA",
    StockName: "RattanIndia Infrastructure Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-JUL-2012",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE834M01019",
    "FACE VALUE": 2
  },
  {
    Symbol: "RTNPOWER",
    StockName: "RattanIndia Power Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-OCT-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE399K01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "RUBYMILLS",
    StockName: "The Ruby Mills Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAR-1995",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE301D01026",
    "FACE VALUE": 5
  },
  {
    Symbol: "RUCHI",
    StockName: "Ruchi Soya Industries Limited",
    SERIES: "BE",
    "DATE OF LISTING": "24-JAN-2020",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE619A01035",
    "FACE VALUE": 2
  },
  {
    Symbol: "RUCHINFRA",
    StockName: "Ruchi Infrastructure Limited",
    SERIES: "BE",
    "DATE OF LISTING": "16-OCT-1996",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE413B01023",
    "FACE VALUE": 1
  },
  {
    Symbol: "RUCHIRA",
    StockName: "Ruchira Papers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-DEC-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE803H01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "RUPA",
    StockName: "Rupa & Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-DEC-2011",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE895B01021",
    "FACE VALUE": 1
  },
  {
    Symbol: "RUSHIL",
    StockName: "Rushil Decor Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-JUL-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE573K01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "RVNL",
    StockName: "Rail Vikas Nigam Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-APR-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE415G01027",
    "FACE VALUE": 10
  },
  {
    Symbol: "S&SPOWER",
    StockName: "S&S Power Switchgears Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-SEP-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE902B01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "SABEVENTS",
    StockName: "Sab Events & Governance Now Media Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-SEP-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE860T01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "SABTN",
    StockName: "Sri Adhikari Brothers Television Network Limited",
    SERIES: "BE",
    "DATE OF LISTING": "16-NOV-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE416A01036",
    "FACE VALUE": 10
  },
  {
    Symbol: "SADBHAV",
    StockName: "Sadbhav Engineering Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-MAR-2006",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE226H01026",
    "FACE VALUE": 1
  },
  {
    Symbol: "SADBHIN",
    StockName: "Sadbhav Infrastructure Project Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-SEP-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE764L01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "SAFARI",
    StockName: "Safari Industries (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-SEP-2019",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE429E01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "SAGARDEEP",
    StockName: "Sagardeep Alloys Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-JAN-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE976T01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "SAGCEM",
    StockName: "Sagar Cements Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-JAN-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE229C01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "SAIL",
    StockName: "Steel Authority of India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-JUL-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE114A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "SAKAR",
    StockName: "Sakar Healthcare Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-APR-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE732S01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "SAKHTISUG",
    StockName: "Sakthi Sugars Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-SEP-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE623A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "SAKSOFT",
    StockName: "Saksoft Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAY-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE667G01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "SAKUMA",
    StockName: "Sakuma Exports Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-MAR-2006",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE190H01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "SALASAR",
    StockName: "Salasar Techno Engineering Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-JUL-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE170V01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "SALONA",
    StockName: "Salona Cotspin Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-JUN-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE498E01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "SALSTEEL",
    StockName: "S.A.L. Steel Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-NOV-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE658G01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "SALZERELEC",
    StockName: "Salzer Electronics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-DEC-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE457F01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "SAMBHAAV",
    StockName: "Sambhaav Media Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-JUN-1996",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE699B01027",
    "FACE VALUE": 1
  },
  {
    Symbol: "SANCO",
    StockName: "Sanco Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-NOV-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE782L01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "SANDESH",
    StockName: "The Sandesh Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-NOV-2002",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE583B01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "SANDHAR",
    StockName: "Sandhar Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-APR-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE278H01035",
    "FACE VALUE": 10
  },
  {
    Symbol: "SANGAMIND",
    StockName: "Sangam (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-JUL-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE495C01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "SANGHIIND",
    StockName: "Sanghi Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAY-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE999B01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "SANGHVIFOR",
    StockName: "Sanghvi Forging and Engineering Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-MAY-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE263L01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "SANGHVIMOV",
    StockName: "Sanghvi Movers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-JAN-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE989A01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "SANGINITA",
    StockName: "Sanginita Chemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-JUL-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE753W01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "SANOFI",
    StockName: "Sanofi India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-MAY-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE058A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "SANWARIA",
    StockName: "Sanwaria Consumer Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-MAR-2006",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE890C01046",
    "FACE VALUE": 1
  },
  {
    Symbol: "SARDAEN",
    StockName: "Sarda Energy & Minerals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-DEC-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE385C01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "SAREGAMA",
    StockName: "Saregama India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-JUL-1997",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE979A01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "SARLAPOLY",
    StockName: "Sarla Performance Fibers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-JAN-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE453D01025",
    "FACE VALUE": 1
  },
  {
    Symbol: "SASKEN",
    StockName: "Sasken Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-SEP-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE231F01020",
    "FACE VALUE": 10
  },
  {
    Symbol: "SASTASUNDR",
    StockName: "Sastasundar Ventures Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-OCT-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE019J01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "SATHAISPAT",
    StockName: "Sathavahana Ispat Limited",
    SERIES: "BE",
    "DATE OF LISTING": "27-DEC-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE176C01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "SATIA",
    StockName: "Satia Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-JUL-2019",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE170E01023",
    "FACE VALUE": 1
  },
  {
    Symbol: "SATIN",
    StockName: "Satin Creditcare Network Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-AUG-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE836B01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "SBICARD",
    StockName: "SBI Cards and Payment Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-MAR-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE018E01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "SBILIFE",
    StockName: "SBI Life Insurance Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-OCT-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE123W01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "SBIN",
    StockName: "State Bank of India",
    SERIES: "EQ",
    "DATE OF LISTING": "01-MAR-1995",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE062A01020",
    "FACE VALUE": 1
  },
  {
    Symbol: "SCAPDVR",
    StockName: "Stampede Capital Limited",
    SERIES: "BE",
    "DATE OF LISTING": "10-OCT-2017",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE224E01036",
    "FACE VALUE": 1
  },
  {
    Symbol: "SCHAEFFLER",
    StockName: "Schaeffler India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-NOV-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE513A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "SCHAND",
    StockName: "S Chand And Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAY-2017",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE807K01035",
    "FACE VALUE": 5
  },
  {
    Symbol: "SCHNEIDER",
    StockName: "Schneider Electric Infrastructure Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-MAR-2012",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE839M01018",
    "FACE VALUE": 2
  },
  {
    Symbol: "SCI",
    StockName: "Shipping Corporation Of India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-AUG-1997",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE109A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "SDBL",
    StockName: "Som Distilleries & Breweries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-MAR-2014",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE480C01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "SEAMECLTD",
    StockName: "Seamec Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUN-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE497B01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "SELAN",
    StockName: "Selan Exploration Technology Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-SEP-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE818A01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "SELMCL",
    StockName: "SEL Manufacturing Company Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "21-AUG-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE105I01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "SEPOWER",
    StockName: "S.E. Power Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-JUL-2012",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE735M01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "SEQUENT",
    StockName: "Sequent Scientific Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAR-2016",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE807F01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "SESHAPAPER",
    StockName: "Seshasayee Paper and Boards Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAR-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE630A01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "SETCO",
    StockName: "Setco Automotive Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-JUL-2016",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE878E01021",
    "FACE VALUE": 2
  },
  {
    Symbol: "SETUINFRA",
    StockName: "Setubandhan Infrastructure Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-OCT-2011",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE023M01027",
    "FACE VALUE": 1
  },
  {
    Symbol: "SEYAIND",
    StockName: "Seya Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-JUL-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE573R01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "SEZAL",
    StockName: "Sezal Glass Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "22-NOV-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE955I01036",
    "FACE VALUE": 10
  },
  {
    Symbol: "SFL",
    StockName: "Sheela Foam Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-DEC-2016",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE916U01025",
    "FACE VALUE": 5
  },
  {
    Symbol: "SGL",
    StockName: "STL Global Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-APR-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE353H01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "SHAHALLOYS",
    StockName: "Shah Alloys Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-JUN-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE640C01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "SHAKTIPUMP",
    StockName: "Shakti Pumps (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-JAN-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE908D01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "SHALBY",
    StockName: "Shalby Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-DEC-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE597J01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "SHALPAINTS",
    StockName: "Shalimar Paints Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-MAR-2008",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE849C01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "SHANKARA",
    StockName: "Shankara Building Products Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-APR-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE274V01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "SHANTIGEAR",
    StockName: "Shanthi Gears Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-JAN-1996",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE631A01022",
    "FACE VALUE": 1
  },
  {
    Symbol: "SHARDACROP",
    StockName: "Sharda Cropchem Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-SEP-2014",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE221J01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "SHARDAMOTR",
    StockName: "Sharda Motor Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-SEP-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE597I01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "SHEMAROO",
    StockName: "Shemaroo Entertainment Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-OCT-2014",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE363M01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "SHIL",
    StockName: "Somany Home Innovation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-DEC-2019",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE05AN01011",
    "FACE VALUE": 2
  },
  {
    Symbol: "SHILPAMED",
    StockName: "Shilpa Medicare Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-DEC-2009",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE790G01031",
    "FACE VALUE": 1
  },
  {
    Symbol: "SHIRPUR-G",
    StockName: "Shirpur Gold Refinery Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-MAR-2001",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE196B01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "SHIVAMAUTO",
    StockName: "Shivam Autotech Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-NOV-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE637H01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "SHIVAMILLS",
    StockName: "Shiva Mills Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-FEB-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE644Y01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "SHIVATEX",
    StockName: "Shiva Texyarn Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-DEC-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE705C01020",
    "FACE VALUE": 10
  },
  {
    Symbol: "SHK",
    StockName: "S H Kelkar and Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-NOV-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE500L01026",
    "FACE VALUE": 10
  },
  {
    Symbol: "SHOPERSTOP",
    StockName: "Shoppers Stop Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-MAY-2005",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE498B01024",
    "FACE VALUE": 5
  },
  {
    Symbol: "SHREDIGCEM",
    StockName: "Shree Digvijay Cement Co.Ltd",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JAN-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE232A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "SHREECEM",
    StockName: "SHREE CEMENT LIMITED",
    SERIES: "EQ",
    "DATE OF LISTING": "26-APR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE070A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "SHREEPUSHK",
    StockName: "Shree Pushkar Chemicals & Fertilisers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-SEP-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE712K01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "SHREERAMA",
    StockName: "Shree Rama Multi-Tech Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-MAR-2000",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE879A01019",
    "FACE VALUE": 5
  },
  {
    Symbol: "SHRENIK",
    StockName: "Shrenik Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-AUG-2019",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE632X01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "SHREYANIND",
    StockName: "Shreyans Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-NOV-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE231C01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "SHREYAS",
    StockName: "Shreyas Shipping & Logistics Limited",
    SERIES: "BE",
    "DATE OF LISTING": "01-MAR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE757B01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "SHRIPISTON",
    StockName: "Shriram Pistons & Rings Limited",
    SERIES: "BE",
    "DATE OF LISTING": "02-JUN-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE526E01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "SHRIRAMCIT",
    StockName: "Shriram City Union Finance Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-APR-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE722A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "SHRIRAMEPC",
    StockName: "Shriram EPC Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-FEB-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE964H01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "SHYAMCENT",
    StockName: "Shyam Century Ferrous Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUL-2015",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE979R01011",
    "FACE VALUE": 1
  },
  {
    Symbol: "SHYAMTEL",
    StockName: "Shyam Telecom Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-NOV-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE635A01023",
    "FACE VALUE": 10
  },
  {
    Symbol: "SICAGEN",
    StockName: "Sicagen India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-AUG-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE176J01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "SICAL",
    StockName: "Sical Logistics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-APR-1999",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE075B01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "SIEMENS",
    StockName: "Siemens Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-SEP-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE003A01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "SIGIND",
    StockName: "Signet Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-AUG-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE529F01035",
    "FACE VALUE": 10
  },
  {
    Symbol: "SIL",
    StockName: "Standard Industries Limited",
    SERIES: "BE",
    "DATE OF LISTING": "27-JAN-2004",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE173A01025",
    "FACE VALUE": 5
  },
  {
    Symbol: "SILINV",
    StockName: "SIL Investments Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-MAY-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE923A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "SILLYMONKS",
    StockName: "Silly Monks Entertainment Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-JUL-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE203Y01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "SIMBHALS",
    StockName: "Simbhaoli Sugars Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-MAR-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE748T01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "SIMPLEXINF",
    StockName: "Simplex Infrastructures Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAR-2004",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE059B01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "SINTEX",
    StockName: "Sintex Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-NOV-1998",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE429C01035",
    "FACE VALUE": 1
  },
  {
    Symbol: "SIRCA",
    StockName: "Sirca Paints India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-JUL-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE792Z01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "SIS",
    StockName: "Security and Intelligence Services (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-AUG-2017",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE285J01028",
    "FACE VALUE": 5
  },
  {
    Symbol: "SITINET",
    StockName: "Siti Networks Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-JAN-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE965H01011",
    "FACE VALUE": 1
  },
  {
    Symbol: "SIYSIL",
    StockName: "Siyaram Silk Mills Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-JAN-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE076B01028",
    "FACE VALUE": 2
  },
  {
    Symbol: "SJVN",
    StockName: "SJVN Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-MAY-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE002L01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "SKFINDIA",
    StockName: "SKF India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-JAN-1999",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE640A01023",
    "FACE VALUE": 10
  },
  {
    Symbol: "SKIL",
    StockName: "SKIL Infrastructure Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-OCT-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE429F01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "SKIPPER",
    StockName: "Skipper Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-MAY-2015",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE439E01022",
    "FACE VALUE": 1
  },
  {
    Symbol: "SKMEGGPROD",
    StockName: "SKM Egg Products Export (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-MAR-1997",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE411D01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "SMARTLINK",
    StockName: "Smartlink Holdings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-APR-2001",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE178C01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "SMLISUZU",
    StockName: "SML Isuzu Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-AUG-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE294B01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "SMPL",
    StockName: "Splendid Metal Products Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "09-MAR-2010",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE215G01021",
    "FACE VALUE": 5
  },
  {
    Symbol: "SMSLIFE",
    StockName: "SMS Lifesciences India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-AUG-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE320X01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "SMSPHARMA",
    StockName: "SMS Pharmaceuticals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-FEB-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE812G01025",
    "FACE VALUE": 1
  },
  {
    Symbol: "SNOWMAN",
    StockName: "Snowman Logistics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-SEP-2014",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE734N01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "SOBHA",
    StockName: "Sobha Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-DEC-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE671H01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "SOLARA",
    StockName: "Solara Active Pharma Sciences Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-JUN-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE624Z01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "SOLARINDS",
    StockName: "Solar Industries India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-APR-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE343H01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "SOMANYCERA",
    StockName: "Somany Ceramics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-NOV-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE355A01028",
    "FACE VALUE": 2
  },
  {
    Symbol: "SOMATEX",
    StockName: "Soma Textiles & Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-AUG-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE314C01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "SOMICONVEY",
    StockName: "Somi Conveyor Beltings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-JUL-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE323J01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "SONATSOFTW",
    StockName: "Sonata Software Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUL-1999",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE269A01021",
    "FACE VALUE": 1
  },
  {
    Symbol: "SORILINFRA",
    StockName: "SORIL Infra Resources Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-DEC-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE034H01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "SOTL",
    StockName: "Savita Oil Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUN-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE035D01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "SOUTHBANK",
    StockName: "The South Indian Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-DEC-1998",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE683A01023",
    "FACE VALUE": 1
  },
  {
    Symbol: "SOUTHWEST",
    StockName: "South West Pinnacle Exploration Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-APR-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE980Y01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "SPAL",
    StockName: "S. P. Apparels Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-AUG-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE212I01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "SPANDANA",
    StockName: "Spandana Sphoorty Financial Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-AUG-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE572J01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "SPARC",
    StockName: "Sun Pharma Advanced Research Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-JUL-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE232I01014",
    "FACE VALUE": 1
  },
  {
    Symbol: "SPCENET",
    StockName: "Spacenet Enterprises India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-JAN-2017",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE970N01027",
    "FACE VALUE": 1
  },
  {
    Symbol: "SPECIALITY",
    StockName: "Speciality Restaurants Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-MAY-2012",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE247M01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "SPENCERS",
    StockName: "Spencer's Retail Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-JAN-2019",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE020801028",
    "FACE VALUE": 5
  },
  {
    Symbol: "SPENTEX",
    StockName: "Spentex Industries Limited",
    SERIES: "BE",
    "DATE OF LISTING": "20-DEC-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE376C01020",
    "FACE VALUE": 10
  },
  {
    Symbol: "SPIC",
    StockName: "Southern Petrochemicals Industries Corporation  Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-JAN-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE147A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "SPICEJET",
    StockName: "SPICEJET LTD",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAY-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 100,
    "ISIN NUMBER": "INE285B01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "SPLIL",
    StockName: "SPL Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-JUL-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE978G01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "SPMLINFRA",
    StockName: "SPML Infra Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-FEB-1996",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE937A01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "SPTL",
    StockName: "Sintex Plastics Technology Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-AUG-2017",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE501W01021",
    "FACE VALUE": 1
  },
  {
    Symbol: "SPYL",
    StockName: "Shekhawati Poly-Yarn Limited",
    SERIES: "BE",
    "DATE OF LISTING": "12-JAN-2011",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE268L01020",
    "FACE VALUE": 1
  },
  {
    Symbol: "SREEL",
    StockName: "Sreeleathers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-JAN-2014",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE099F01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "SREINFRA",
    StockName: "SREI Infrastructure Finance Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-DEC-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE872A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "SRF",
    StockName: "SRF Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-AUG-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE647A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "SRHHYPOLTD",
    StockName: "Sree Rayalaseema Hi-Strength Hypo Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-MAY-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE917H01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "SRIPIPES",
    StockName: "Srikalahasthi Pipes Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-AUG-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE943C01027",
    "FACE VALUE": 10
  },
  {
    Symbol: "SRTRANSFIN",
    StockName: "Shriram Transport Finance Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-DEC-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE721A01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "SSWL",
    StockName: "Steel Strips Wheels Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-JUN-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE802C01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "STAMPEDE",
    StockName: "Stampede Capital Limited",
    SERIES: "BE",
    "DATE OF LISTING": "25-JUL-2016",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE224E01028",
    "FACE VALUE": 1
  },
  {
    Symbol: "STAR",
    StockName: "Strides Pharma Science Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-FEB-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE939A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "STARCEMENT",
    StockName: "Star Cement Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-JUN-2017",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE460H01021",
    "FACE VALUE": 1
  },
  {
    Symbol: "STARPAPER",
    StockName: "Star Paper Mills Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-SEP-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE733A01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "STCINDIA",
    StockName: "The State Trading Corporation of India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-APR-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE655A01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "STEELCITY",
    StockName: "Steel City Securities Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-JUN-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE395H01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "STEELXIND",
    StockName: "STEEL EXCHANGE INDIA LIMITED",
    SERIES: "EQ",
    "DATE OF LISTING": "20-JUL-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE503B01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "STEL",
    StockName: "Stel Holdings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-FEB-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE577L01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "STERTOOLS",
    StockName: "Sterling Tools Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-FEB-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE334A01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "STINDIA",
    StockName: "STI India Limited",
    SERIES: "BE",
    "DATE OF LISTING": "06-DEC-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE090C01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "STRTECH",
    StockName: "Sterlite Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-DEC-2000",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE089C01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "SUBCAPCITY",
    StockName: "International Constructions Limited",
    SERIES: "BE",
    "DATE OF LISTING": "10-JUL-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE845C01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "SUBEX",
    StockName: "Subex Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-SEP-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE754A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "SUBROS",
    StockName: "Subros Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-JUL-2005",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE287B01021",
    "FACE VALUE": 2
  },
  {
    Symbol: "SUDARSCHEM",
    StockName: "Sudarshan Chemical Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-MAY-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE659A01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "SUJANAUNI",
    StockName: "Sujana Universal Industries Limited",
    SERIES: "BE",
    "DATE OF LISTING": "19-FEB-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE216G01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "SUMEETINDS",
    StockName: "Sumeet Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-DEC-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE235C01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "SUMICHEM",
    StockName: "Sumitomo Chemical India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-JAN-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE258G01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "SUMIT",
    StockName: "Sumit Woods Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-JUL-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE748Z01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "SUMMITSEC",
    StockName: "Summit Securities Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JAN-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE519C01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "SUNCLAYLTD",
    StockName: "Sundaram Clayton Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-OCT-2012",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE105A01035",
    "FACE VALUE": 5
  },
  {
    Symbol: "SUNDARAM",
    StockName: "Sundaram Multi Pap Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-JUN-2010",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE108E01023",
    "FACE VALUE": 1
  },
  {
    Symbol: "SUNDARMFIN",
    StockName: "Sundaram Finance Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-JAN-1998",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE660A01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "SUNDARMHLD",
    StockName: "Sundaram Finance Holdings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-MAR-2018",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE202Z01029",
    "FACE VALUE": 5
  },
  {
    Symbol: "SUNDRMBRAK",
    StockName: "Sundaram Brake Linings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-JUL-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE073D01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "SUNDRMFAST",
    StockName: "Sundram Fasteners Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-JUN-2000",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE387A01021",
    "FACE VALUE": 1
  },
  {
    Symbol: "SUNFLAG",
    StockName: "Sunflag Iron And Steel Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-SEP-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE947A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "SUNPHARMA",
    StockName: "Sun Pharmaceutical Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE044A01036",
    "FACE VALUE": 1
  },
  {
    Symbol: "SUNTECK",
    StockName: "Sunteck Realty Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-NOV-2009",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE805D01034",
    "FACE VALUE": 1
  },
  {
    Symbol: "SUNTV",
    StockName: "Sun TV Network Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-APR-2006",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE424H01027",
    "FACE VALUE": 5
  },
  {
    Symbol: "SUPERHOUSE",
    StockName: "Superhouse Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-SEP-2014",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE712B01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "SUPERSPIN",
    StockName: "Super Spinning Mills Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-JUL-2004",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE662A01027",
    "FACE VALUE": 1
  },
  {
    Symbol: "SUPPETRO",
    StockName: "Supreme Petrochem Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-OCT-1999",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE663A01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "SUPRAJIT",
    StockName: "Suprajit Engineering Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-FEB-2005",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE399C01030",
    "FACE VALUE": 1
  },
  {
    Symbol: "SUPREMEIND",
    StockName: "Supreme Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-JUL-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE195A01028",
    "FACE VALUE": 2
  },
  {
    Symbol: "SUPREMEINF",
    StockName: "Supreme Infrastructure India Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "18-OCT-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE550H01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "SURANASOL",
    StockName: "Surana Solar Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-JAN-2011",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE272L01022",
    "FACE VALUE": 5
  },
  {
    Symbol: "SURANAT&P",
    StockName: "Surana Telecom and Power Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-MAY-2002",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE130B01031",
    "FACE VALUE": 1
  },
  {
    Symbol: "SURYALAXMI",
    StockName: "Suryalakshmi Cotton Mills Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-JUN-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE713B01026",
    "FACE VALUE": 10
  },
  {
    Symbol: "SURYAROSNI",
    StockName: "Surya Roshni Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAY-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE335A01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "SUTLEJTEX",
    StockName: "Sutlej Textiles and Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-DEC-2006",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE645H01027",
    "FACE VALUE": 1
  },
  {
    Symbol: "SUVEN",
    StockName: "Suven Life Sciences Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-OCT-2003",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE495B01038",
    "FACE VALUE": 1
  },
  {
    Symbol: "SUVENPHAR",
    StockName: "Suven Pharmaceuticals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAR-2020",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE03QK01018",
    "FACE VALUE": 1
  },
  {
    Symbol: "SUZLON",
    StockName: "Suzlon Energy Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-OCT-2005",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE040H01021",
    "FACE VALUE": 2
  },
  {
    Symbol: "SWANENERGY",
    StockName: "Swan Energy Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-MAY-2012",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE665A01038",
    "FACE VALUE": 1
  },
  {
    Symbol: "SWARAJENG",
    StockName: "Swaraj Engines Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-DEC-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE277A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "SWELECTES",
    StockName: "Swelect Energy Systems Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAY-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE409B01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "SWSOLAR",
    StockName: "Sterling And Wilson Solar Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-AUG-2019",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE00M201021",
    "FACE VALUE": 1
  },
  {
    Symbol: "SYMPHONY",
    StockName: "Symphony Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-JUN-2011",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE225D01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "SYNCOM",
    StockName: "Syncom Healthcare Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-FEB-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE602K01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "SYNGENE",
    StockName: "Syngene International Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-AUG-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE398R01022",
    "FACE VALUE": 10
  },
  {
    Symbol: "TAINWALCHM",
    StockName: "Tainwala Chemical and Plastic (I) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-JUL-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE123C01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "TAJGVK",
    StockName: "Taj GVK Hotels & Resorts Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-DEC-2000",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE586B01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "TAKE",
    StockName: "Take Solutions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-AUG-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE142I01023",
    "FACE VALUE": 1
  },
  {
    Symbol: "TALBROAUTO",
    StockName: "Talbros Automotive Components Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-SEP-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE187D01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "TALWALKARS",
    StockName: "Talwalkars Better Value Fitness Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "10-MAY-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE502K01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "TALWGYM",
    StockName: "Talwalkars Healthclubs Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "29-JUN-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE627Z01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "TANLA",
    StockName: "Tanla Solutions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-JAN-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE483C01032",
    "FACE VALUE": 1
  },
  {
    Symbol: "TANTIACONS",
    StockName: "Tantia Constructions Limited",
    SERIES: "BE",
    "DATE OF LISTING": "19-FEB-2008",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE388G01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "TARMAT",
    StockName: "Tarmat Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-JUL-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE924H01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "TASTYBITE",
    StockName: "Tasty Bite Eatables Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-MAR-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE488B01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "TATACHEM",
    StockName: "Tata Chemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-APR-1999",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE092A01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "TATACOFFEE",
    StockName: "Tata Coffee Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-FEB-2000",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE493A01027",
    "FACE VALUE": 1
  },
  {
    Symbol: "TATACOMM",
    StockName: "Tata Communications Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-APR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE151A01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "TATACONSUM",
    StockName: "TATA CONSUMER PRODUCTS LIMITED",
    SERIES: "EQ",
    "DATE OF LISTING": "18-NOV-1998",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE192A01025",
    "FACE VALUE": 1
  },
  {
    Symbol: "TATAELXSI",
    StockName: "Tata Elxsi Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-SEP-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE670A01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "TATAINVEST",
    StockName: "Tata Investment Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-JUN-1998",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE672A01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "TATAMETALI",
    StockName: "Tata Metaliks Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-MAY-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE056C01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "TATAMOTORS",
    StockName: "Tata Motors Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-JUL-1998",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE155A01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "TATAMTRDVR",
    StockName: "Tata Motors Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-NOV-2008",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "IN9155A01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "TATAPOWER",
    StockName: "Tata Power Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-APR-1996",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE245A01021",
    "FACE VALUE": 1
  },
  {
    Symbol: "TATASTEEL",
    StockName: "Tata Steel Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-NOV-1998",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE081A01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "TATASTLBSL",
    StockName: "Tata Steel Bsl Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-NOV-2003",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE824B01021",
    "FACE VALUE": 2
  },
  {
    Symbol: "TATASTLLP",
    StockName: "Tata Steel Long Products Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-FEB-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE674A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "TBZ",
    StockName: "Tribhovandas Bhimji Zaveri Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAY-2012",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE760L01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "TCI",
    StockName: "Transport Corporation of India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-JAN-2002",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE688A01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "TCIDEVELOP",
    StockName: "TCI Developers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-APR-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE662L01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "TCIEXP",
    StockName: "TCI Express Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-DEC-2016",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE586V01016",
    "FACE VALUE": 2
  },
  {
    Symbol: "TCIFINANCE",
    StockName: "TCI Finance Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-MAY-1997",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE911B01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "TCNSBRANDS",
    StockName: "TCNS Clothing Co. Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-JUL-2018",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE778U01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "TCPLPACK",
    StockName: "TCPL Packaging Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-OCT-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE822C01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "TCS",
    StockName: "Tata Consultancy Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-AUG-2004",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE467B01029",
    "FACE VALUE": 1
  },
  {
    Symbol: "TDPOWERSYS",
    StockName: "TD Power Systems Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-SEP-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE419M01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "TEAMLEASE",
    StockName: "Teamlease Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-FEB-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE985S01024",
    "FACE VALUE": 10
  },
  {
    Symbol: "TECHIN",
    StockName: "Techindia Nirman Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-SEP-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE778A01021",
    "FACE VALUE": 10
  },
  {
    Symbol: "TECHM",
    StockName: "Tech Mahindra Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-AUG-2006",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE669C01036",
    "FACE VALUE": 5
  },
  {
    Symbol: "TECHNOE",
    StockName: "Techno Electric & Engineering Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-DEC-2018",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE285K01026",
    "FACE VALUE": 2
  },
  {
    Symbol: "TECHNOFAB",
    StockName: "Technofab Engineering Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-JUL-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE509K01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "TEJASNET",
    StockName: "Tejas Networks Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-JUN-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE010J01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "TERASOFT",
    StockName: "Tera Software Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-DEC-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE482B01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "TEXINFRA",
    StockName: "Texmaco Infrastructure & Holdings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-SEP-2004",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE435C01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "TEXMOPIPES",
    StockName: "Texmo Pipes and Products Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAR-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE141K01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "TEXRAIL",
    StockName: "Texmaco Rail & Engineering Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-MAR-2011",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE621L01012",
    "FACE VALUE": 1
  },
  {
    Symbol: "TFCILTD",
    StockName: "Tourism Finance Corporation of India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-JUL-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE305A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "TFL",
    StockName: "Transwarranty Finance Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-FEB-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE804H01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "TGBHOTELS",
    StockName: "TGB Banquets And Hotels Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-MAY-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE797H01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "THANGAMAYL",
    StockName: "Thangamayil Jewellery Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-FEB-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE085J01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "THEINVEST",
    StockName: "The Investment Trust Of India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-AUG-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE924D01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "THEMISMED",
    StockName: "Themis Medicare Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-APR-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE083B01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "THERMAX",
    StockName: "Thermax Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-AUG-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE152A01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "THIRUSUGAR",
    StockName: "Thiru Arooran Sugars Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "02-MAY-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE409A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "THOMASCOOK",
    StockName: "Thomas Cook  (India)  Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-JUN-2000",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE332A01027",
    "FACE VALUE": 1
  },
  {
    Symbol: "THOMASCOTT",
    StockName: "Thomas Scott (India) Limited",
    SERIES: "BE",
    "DATE OF LISTING": "30-JAN-2012",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE480M01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "THYROCARE",
    StockName: "Thyrocare Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAY-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE594H01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "TI",
    StockName: "Tilaknagar Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-JUL-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE133E01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "TIDEWATER",
    StockName: "Tide Water Oil Company (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-JAN-2007",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE484C01022",
    "FACE VALUE": 5
  },
  {
    Symbol: "TIIL",
    StockName: "Technocraft Industries (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-FEB-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE545H01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "TIINDIA",
    StockName: "Tube Investments of India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-NOV-2017",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE974X01010",
    "FACE VALUE": 1
  },
  {
    Symbol: "TIJARIA",
    StockName: "Tijaria Polypipes Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-OCT-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE440L01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "TIL",
    StockName: "TIL Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-SEP-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE806C01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "TIMESGTY",
    StockName: "Times Guaranty Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-JUN-2002",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE289C01025",
    "FACE VALUE": 10
  },
  {
    Symbol: "TIMETECHNO",
    StockName: "Time Technoplast Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-JUN-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE508G01029",
    "FACE VALUE": 1
  },
  {
    Symbol: "TIMKEN",
    StockName: "Timken India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-FEB-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE325A01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "TINPLATE",
    StockName: "The Tinplate Company of India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-JAN-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE422C01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "TIPSINDLTD",
    StockName: "TIPS Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-NOV-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE716B01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "TIRUMALCHM",
    StockName: "Thirumalai Chemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-MAY-2003",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE338A01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "TIRUPATIFL",
    StockName: "Tirupati Forge Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-AUG-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE319Y01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "TITAN",
    StockName: "Titan Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-SEP-2004",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE280A01028",
    "FACE VALUE": 1
  },
  {
    Symbol: "TMRVL",
    StockName: "The Mandhana Retail Ventures Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-DEC-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE759V01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "TNPETRO",
    StockName: "Tamilnadu PetroProducts Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-OCT-1999",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE148A01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "TNPL",
    StockName: "Tamil Nadu Newsprint & Papers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-FEB-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE107A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "TNTELE",
    StockName: "Tamilnadu Telecommunication Limited",
    SERIES: "BE",
    "DATE OF LISTING": "04-FEB-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE141D01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "TOKYOPLAST",
    StockName: "Tokyo Plast International Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-OCT-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE932C01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "TORNTPHARM",
    StockName: "Torrent Pharmaceuticals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-NOV-2002",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE685A01028",
    "FACE VALUE": 5
  },
  {
    Symbol: "TORNTPOWER",
    StockName: "Torrent Power Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-NOV-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE813H01021",
    "FACE VALUE": 10
  },
  {
    Symbol: "TOUCHWOOD",
    StockName: "Touchwood Entertainment Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-JAN-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE486Y01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "TPLPLASTEH",
    StockName: "TPL Plastech Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-MAY-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE413G01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "TREEHOUSE",
    StockName: "Tree House Education & Accessories Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-AUG-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE040M01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "TREJHARA",
    StockName: "TREJHARA SOLUTIONS LIMITED",
    SERIES: "EQ",
    "DATE OF LISTING": "28-DEC-2018",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE00CA01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "TRENT",
    StockName: "Trent Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-JUN-2004",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE849A01020",
    "FACE VALUE": 1
  },
  {
    Symbol: "TRF",
    StockName: "TRF Limited",
    SERIES: "BE",
    "DATE OF LISTING": "26-MAR-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE391D01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "TRIDENT",
    StockName: "Trident Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-FEB-2001",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE064C01022",
    "FACE VALUE": 1
  },
  {
    Symbol: "TRIGYN",
    StockName: "Trigyn Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-APR-1998",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE948A01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "TRIL",
    StockName: "Transformers And Rectifiers (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-DEC-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE763I01026",
    "FACE VALUE": 1
  },
  {
    Symbol: "TRITURBINE",
    StockName: "Triveni Turbine Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-OCT-2011",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE152M01016",
    "FACE VALUE": 1
  },
  {
    Symbol: "TRIVENI",
    StockName: "Triveni Engineering & Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-DEC-2005",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE256C01024",
    "FACE VALUE": 1
  },
  {
    Symbol: "TTKHLTCARE",
    StockName: "TTK Healthcare Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-DEC-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE910C01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "TTKPRESTIG",
    StockName: "TTK Prestige Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-DEC-1999",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE690A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "TTL",
    StockName: "T T Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-FEB-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE592B01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "TTML",
    StockName: "Tata Teleservices (Maharashtra) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-OCT-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE517B01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "TV18BRDCST",
    StockName: "TV18 Broadcast Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE886H01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "TVSELECT",
    StockName: "TVS Electronics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "26-DEC-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE236G01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "TVSMOTOR",
    StockName: "TVS Motor Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-AUG-2000",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE494B01023",
    "FACE VALUE": 1
  },
  {
    Symbol: "TVSSRICHAK",
    StockName: "TVS Srichakra Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-FEB-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE421C01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "TVTODAY",
    StockName: "TV Today Network Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "16-JAN-2004",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE038F01029",
    "FACE VALUE": 5
  },
  {
    Symbol: "TVVISION",
    StockName: "TV Vision Limited",
    SERIES: "BE",
    "DATE OF LISTING": "15-SEP-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE871L01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "TWL",
    StockName: "Titagarh Wagons Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-APR-2008",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE615H01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "UBL",
    StockName: "United Breweries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUL-2008",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE686F01025",
    "FACE VALUE": 1
  },
  {
    Symbol: "UCALFUEL",
    StockName: "Ucal Fuel Systems Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-SEP-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE139B01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "UCOBANK",
    StockName: "UCO Bank",
    SERIES: "EQ",
    "DATE OF LISTING": "09-OCT-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE691A01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "UFLEX",
    StockName: "UFLEX Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-AUG-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE516A01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "UFO",
    StockName: "UFO Moviez India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-MAY-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE527H01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "UGARSUGAR",
    StockName: "The Ugar Sugar Works Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-AUG-2010",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE071E01023",
    "FACE VALUE": 1
  },
  {
    Symbol: "UJAAS",
    StockName: "Ujaas Energy Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-OCT-2011",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE899L01022",
    "FACE VALUE": 1
  },
  {
    Symbol: "UJJIVAN",
    StockName: "Ujjivan Financial Services Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAY-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE334L01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "UJJIVANSFB",
    StockName: "Ujjivan Small Finance Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-DEC-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE551W01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "ULTRACEMCO",
    StockName: "UltraTech Cement Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-AUG-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE481G01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "UMANGDAIRY",
    StockName: "Umang Dairies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-DEC-2015",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE864B01027",
    "FACE VALUE": 5
  },
  {
    Symbol: "UMESLTD",
    StockName: "Usha Martin Education & Solutions Limited",
    SERIES: "BE",
    "DATE OF LISTING": "12-JUL-2010",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE240C01028",
    "FACE VALUE": 1
  },
  {
    Symbol: "UNICHEMLAB",
    StockName: "Unichem Laboratories Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-FEB-2001",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE351A01035",
    "FACE VALUE": 2
  },
  {
    Symbol: "UNIENTER",
    StockName: "Uniphos Enterprises Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-JAN-2004",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE037A01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "UNIONBANK",
    StockName: "Union Bank of India",
    SERIES: "EQ",
    "DATE OF LISTING": "24-SEP-2002",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE692A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "UNIPLY",
    StockName: "Uniply Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-MAR-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE950G01023",
    "FACE VALUE": 2
  },
  {
    Symbol: "UNITECH",
    StockName: "Unitech Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "08-SEP-1999",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE694A01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "UNITEDTEA",
    StockName: "The United Nilgiri Tea Estates Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JAN-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE458F01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "UNITY",
    StockName: "Unity Infraprojects Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "12-JUN-2006",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE466H01028",
    "FACE VALUE": 2
  },
  {
    Symbol: "UNIVASTU",
    StockName: "Univastu India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "22-JUN-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE562X01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "UNIVCABLES",
    StockName: "Universal Cables Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-MAY-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE279A01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "UNIVPHOTO",
    StockName: "Universus Photo Imagings Limited",
    SERIES: "BE",
    "DATE OF LISTING": "14-FEB-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE03V001013",
    "FACE VALUE": 10
  },
  {
    Symbol: "UPL",
    StockName: "UPL Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-JAN-2004",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE628A01036",
    "FACE VALUE": 2
  },
  {
    Symbol: "URJA",
    StockName: "Urja Global Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-MAR-2017",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE550C01020",
    "FACE VALUE": 1
  },
  {
    Symbol: "USHAMART",
    StockName: "Usha Martin Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-OCT-2000",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE228A01035",
    "FACE VALUE": 1
  },
  {
    Symbol: "UTTAMSTL",
    StockName: "Uttam Galva Steels Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-MAY-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE699A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "UTTAMSUGAR",
    StockName: "Uttam Sugar Mills Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-APR-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE786F01031",
    "FACE VALUE": 10
  },
  {
    Symbol: "UVSL",
    StockName: "Uttam Value Steels Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-JUN-2016",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE292A01023",
    "FACE VALUE": 1
  },
  {
    Symbol: "V2RETAIL",
    StockName: "V2 Retail Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-JUL-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE945H01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "VADILALIND",
    StockName: "Vadilal Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-JUN-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE694D01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "VAIBHAVGBL",
    StockName: "Vaibhav Global Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-APR-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE884A01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "VAISHALI",
    StockName: "Vaishali Pharma Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-JAN-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE972X01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "VAKRANGEE",
    StockName: "Vakrangee Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "03-APR-2006",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE051B01021",
    "FACE VALUE": 1
  },
  {
    Symbol: "VARDHACRLC",
    StockName: "Vardhman Acrylics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-SEP-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE116G01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "VARDMNPOLY",
    StockName: "Vardhman Polytex Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-MAY-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE835A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "VARROC",
    StockName: "Varroc Engineering Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-JUL-2018",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE665L01035",
    "FACE VALUE": 1
  },
  {
    Symbol: "VASCONEQ",
    StockName: "Vascon Engineers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-FEB-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE893I01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "VASWANI",
    StockName: "Vaswani Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-SEP-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE590L01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "VBL",
    StockName: "Varun Beverages Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-NOV-2016",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE200M01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "VEDL",
    StockName: "Vedanta Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-MAY-1998",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE205A01025",
    "FACE VALUE": 1
  },
  {
    Symbol: "VENKEYS",
    StockName: "Venky's (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUL-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE398A01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "VENUSREM",
    StockName: "Venus Remedies Limited",
    SERIES: "BE",
    "DATE OF LISTING": "20-DEC-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE411B01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "VERTOZ",
    StockName: "Vertoz Advertising Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-MAY-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE188Y01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "VESUVIUS",
    StockName: "Vesuvius India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-OCT-2002",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE386A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "VETO",
    StockName: "Veto Switchgears And Cables Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "29-APR-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE918N01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "VGUARD",
    StockName: "V-Guard Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-MAR-2008",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE951I01027",
    "FACE VALUE": 1
  },
  {
    Symbol: "VHL",
    StockName: "Vardhman Holdings Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-JUN-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE701A01023",
    "FACE VALUE": 10
  },
  {
    Symbol: "VICEROY",
    StockName: "Viceroy Hotels Limited",
    SERIES: "BE",
    "DATE OF LISTING": "21-AUG-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE048C01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "VIDEOIND",
    StockName: "Videocon Industries Limited",
    SERIES: "BZ",
    "DATE OF LISTING": "31-JUL-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE703A01011",
    "FACE VALUE": 10
  },
  {
    Symbol: "VIDHIING",
    StockName: "Vidhi Specialty Food Ingredients Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-MAR-2016",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE632C01026",
    "FACE VALUE": 1
  },
  {
    Symbol: "VIJIFIN",
    StockName: "Viji Finance Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "11-JUL-2016",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE159N01027",
    "FACE VALUE": 1
  },
  {
    Symbol: "VIKASECO",
    StockName: "Vikas EcoTech Limited",
    SERIES: "BE",
    "DATE OF LISTING": "12-DEC-2011",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE806A01020",
    "FACE VALUE": 1
  },
  {
    Symbol: "VIKASMCORP",
    StockName: "Vikas Multicorp Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-MAY-2019",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE161L01027",
    "FACE VALUE": 1
  },
  {
    Symbol: "VIKASPROP",
    StockName: "Vikas Proppant & Granite Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-AUG-2019",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE767B01022",
    "FACE VALUE": 1
  },
  {
    Symbol: "VIKASWSP",
    StockName: "Vikas WSP Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAY-1995",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE706A01022",
    "FACE VALUE": 1
  },
  {
    Symbol: "VIMTALABS",
    StockName: "Vimta Labs Limited",
    SERIES: "BE",
    "DATE OF LISTING": "15-DEC-2005",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE579C01029",
    "FACE VALUE": 2
  },
  {
    Symbol: "VINATIORGA",
    StockName: "Vinati Organics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-JUL-2009",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE410B01037",
    "FACE VALUE": 1
  },
  {
    Symbol: "VINDHYATEL",
    StockName: "Vindhya Telelinks Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE707A01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "VINYLINDIA",
    StockName: "Vinyl Chemicals (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "21-JUL-2008",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE250B01029",
    "FACE VALUE": 1
  },
  {
    Symbol: "VIPCLOTHNG",
    StockName: "VIP Clothing Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-AUG-2007",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE450G01024",
    "FACE VALUE": 2
  },
  {
    Symbol: "VIPIND",
    StockName: "VIP Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "02-MAR-2005",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE054A01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "VIPULLTD",
    StockName: "Vipul Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-APR-2015",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE946H01037",
    "FACE VALUE": 1
  },
  {
    Symbol: "VISAKAIND",
    StockName: "Visaka Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "28-AUG-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE392A01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "VISASTEEL",
    StockName: "Visa Steel Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-MAR-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE286H01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "VISHAL",
    StockName: "Vishal Fabrics Limited",
    SERIES: "BE",
    "DATE OF LISTING": "19-AUG-2019",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE755Q01025",
    "FACE VALUE": 5
  },
  {
    Symbol: "VISHNU",
    StockName: "Vishnu Chemicals Limited",
    SERIES: "BE",
    "DATE OF LISTING": "05-MAR-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE270I01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "VISHWARAJ",
    StockName: "Vishwaraj Sugar Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-OCT-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE430N01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "VIVIDHA",
    StockName: "Visagar Polytex Limited",
    SERIES: "BE",
    "DATE OF LISTING": "21-MAY-2013",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE370E01029",
    "FACE VALUE": 1
  },
  {
    Symbol: "VIVIMEDLAB",
    StockName: "Vivimed Labs Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-AUG-2005",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE526G01021",
    "FACE VALUE": 2
  },
  {
    Symbol: "VLSFINANCE",
    StockName: "VLS Finance Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "25-MAY-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE709A01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "VMART",
    StockName: "V-Mart Retail Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-FEB-2013",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE665J01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "VOLTAMP",
    StockName: "Voltamp Transformers Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-SEP-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE540H01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "VOLTAS",
    StockName: "Voltas Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-APR-1995",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE226A01021",
    "FACE VALUE": 1
  },
  {
    Symbol: "VRLLOG",
    StockName: "VRL Logistics Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-APR-2015",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE366I01010",
    "FACE VALUE": 10
  },
  {
    Symbol: "VSSL",
    StockName: "Vardhman Special Steels Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-MAY-2012",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE050M01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "VSTIND",
    StockName: "VST Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "05-SEP-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE710A01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "VSTTILLERS",
    StockName: "V.S.T Tillers Tractors Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-JUN-2011",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE764D01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "VTL",
    StockName: "Vardhman Textiles Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "14-JAN-2003",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE825A01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "WABAG",
    StockName: "VA Tech Wabag Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-OCT-2010",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE956G01038",
    "FACE VALUE": 2
  },
  {
    Symbol: "WABCOINDIA",
    StockName: "WABCO India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-OCT-2008",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE342J01019",
    "FACE VALUE": 5
  },
  {
    Symbol: "WALCHANNAG",
    StockName: "Walchandnagar Industries Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-SEP-1996",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE711A01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "WANBURY",
    StockName: "Wanbury Limited",
    SERIES: "BE",
    "DATE OF LISTING": "29-JAN-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE107F01022",
    "FACE VALUE": 10
  },
  {
    Symbol: "WATERBASE",
    StockName: "Waterbase Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 100,
    "ISIN NUMBER": "INE054C01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "WEBELSOLAR",
    StockName: "Websol Energy System Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "15-MAY-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE855C01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "WEIZMANIND",
    StockName: "Weizmann Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-MAY-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE080A01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "WELCORP",
    StockName: "Welspun Corp Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "24-MAY-2005",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE191B01025",
    "FACE VALUE": 5
  },
  {
    Symbol: "WELENT",
    StockName: "Welspun Enterprises Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-NOV-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE625G01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "WELINV",
    StockName: "Welspun Investments and Commercials Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-SEP-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE389K01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "WELSPUNIND",
    StockName: "Welspun India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-DEC-2003",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE192B01031",
    "FACE VALUE": 1
  },
  {
    Symbol: "WENDT",
    StockName: "Wendt (India) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-AUG-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE274C01019",
    "FACE VALUE": 10
  },
  {
    Symbol: "WESTLIFE",
    StockName: "Westlife Development Ltd",
    SERIES: "EQ",
    "DATE OF LISTING": "19-AUG-2019",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE274F01020",
    "FACE VALUE": 2
  },
  {
    Symbol: "WHEELS",
    StockName: "Wheels India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "07-APR-2000",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE715A01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "WHIRLPOOL",
    StockName: "Whirlpool of India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "06-APR-2010",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE716A01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "WILLAMAGOR",
    StockName: "Williamson Magor & Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-FEB-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE210A01017",
    "FACE VALUE": 10
  },
  {
    Symbol: "WINDMACHIN",
    StockName: "Windsor Machines Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-AUG-2011",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE052A01021",
    "FACE VALUE": 2
  },
  {
    Symbol: "WIPL",
    StockName: "The Western India Plywoods Limited",
    SERIES: "BE",
    "DATE OF LISTING": "17-APR-2017",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE215F01023",
    "FACE VALUE": 10
  },
  {
    Symbol: "WIPRO",
    StockName: "Wipro Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "08-NOV-1995",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE075A01022",
    "FACE VALUE": 2
  },
  {
    Symbol: "WOCKPHARMA",
    StockName: "Wockhardt Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "23-FEB-2000",
    "PAID UP VALUE": 5,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE049B01025",
    "FACE VALUE": 5
  },
  {
    Symbol: "WONDERLA",
    StockName: "Wonderla Holidays Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAY-2014",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE066O01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "WORTH",
    StockName: "Worth Peripherals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "04-AUG-2020",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE196Y01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "WSI",
    StockName: "W S Industries (I) Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "01-AUG-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE100D01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "WSTCSTPAPR",
    StockName: "West Coast Paper Mills Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "17-JAN-2001",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE976A01021",
    "FACE VALUE": 2
  },
  {
    Symbol: "XCHANGING",
    StockName: "Xchanging Solutions Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-MAR-2005",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE692G01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "XELPMOC",
    StockName: "Xelpmoc Design And Tech Limited",
    SERIES: "BE",
    "DATE OF LISTING": "04-FEB-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE01P501012",
    "FACE VALUE": 10
  },
  {
    Symbol: "XPROINDIA",
    StockName: "Xpro India Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-APR-2004",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE445C01015",
    "FACE VALUE": 10
  },
  {
    Symbol: "YESBANK",
    StockName: "Yes Bank Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-JUL-2005",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE528G01035",
    "FACE VALUE": 2
  },
  {
    Symbol: "ZEEL",
    StockName: "Zee Entertainment Enterprises Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-SEP-1998",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE256A01028",
    "FACE VALUE": 1
  },
  {
    Symbol: "ZEELEARN",
    StockName: "Zee Learn Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "20-DEC-2010",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE565L01011",
    "FACE VALUE": 1
  },
  {
    Symbol: "ZEEMEDIA",
    StockName: "Zee Media Corporation Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-JAN-2007",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE966H01019",
    "FACE VALUE": 1
  },
  {
    Symbol: "ZENITHEXPO",
    StockName: "Zenith Exports Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "10-JUL-1996",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE058B01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "ZENITHSTL",
    StockName: "Zenith Steel Pipes & Industries Limited",
    SERIES: "BE",
    "DATE OF LISTING": "30-APR-2007",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE318D01020",
    "FACE VALUE": 10
  },
  {
    Symbol: "ZENSARTECH",
    StockName: "Zensar Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "09-JUL-2003",
    "PAID UP VALUE": 2,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE520A01027",
    "FACE VALUE": 2
  },
  {
    Symbol: "ZENTEC",
    StockName: "Zen Technologies Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "30-MAR-2015",
    "PAID UP VALUE": 1,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE251B01027",
    "FACE VALUE": 1
  },
  {
    Symbol: "ZICOM",
    StockName: "Zicom Electronic Security Systems Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "18-APR-2006",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE871B01014",
    "FACE VALUE": 10
  },
  {
    Symbol: "ZODIACLOTH",
    StockName: "Zodiac Clothing Company Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-SEP-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE206B01013",
    "FACE VALUE": 10
  },
  {
    Symbol: "ZODJRDMKJ",
    StockName: "Zodiac JRD- MKJ Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-JUL-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE077B01018",
    "FACE VALUE": 10
  },
  {
    Symbol: "ZOTA",
    StockName: "Zota Health Care LImited",
    SERIES: "EQ",
    "DATE OF LISTING": "19-AUG-2019",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE358U01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "ZUARI",
    StockName: "Zuari Agro Chemicals Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "27-NOV-2012",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE840M01016",
    "FACE VALUE": 10
  },
  {
    Symbol: "ZUARIGLOB",
    StockName: "Zuari Global Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "12-APR-1995",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE217A01012",
    "FACE VALUE": 10
  },
  {
    Symbol: "ZYDUSWELL",
    StockName: "Zydus Wellness Limited",
    SERIES: "EQ",
    "DATE OF LISTING": "13-NOV-2009",
    "PAID UP VALUE": 10,
    "MARKET LOT": 1,
    "ISIN NUMBER": "INE768C01010",
    "FACE VALUE": 10
  }
];

module.exports = { stockList };

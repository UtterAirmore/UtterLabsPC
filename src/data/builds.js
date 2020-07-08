const builds = [
    {
        "type": "gaming",
        "name":"Tier-1",
        "price":"500€",
        "videoCard":"Vega 11",
        "cpu":"R5 3400G",
        "ram":"16GB 3000 MHz",
        "imgUrl":"https://www.sedatech.net/Produktbilder/Gehause/case_1000x1000/main/nzxt_h200i-black-blue.jpg"
    },

    {
        "type": "gaming",
        "name": "Tier-2",
        "price": "650€",
        "videoCard": "5500XT",
        "cpu": "R3 3100",
        "ram": "16GB 3000 MHz",
        "imgUrl": "https://www.sedatech.net/Produktbilder/Gehause/case_1000x1000/main/sharkoon_tg6-rgb.jpg"
    },

    {
        "type": "gaming",
        "name": "Tier-3",
        "price": "800€",
        "videoCard": "1650SUPER",
        "cpu": "R3 3300x",
        "ram": "16GB 3200 MHz",
        "imgUrl": "https://www.sedatech.net/Produktbilder/Gehause/case_1000x1000/main/silentiumpc_signum-sg1v-tg-argb.jpg"
    },

    {
        "type": "gaming",
        "name": "Tier-4",
        "price": "915€",
        "videoCard": "1660SUPER",
        "cpu": "R5 3600",
        "ram": "16GB 3200 MHz",
        "imgUrl": "https://www.sedatech.net/Produktbilder/Gehause/case_1000x1000/main/silentiumpc_signum-sg1x-tg-black_2.jpg"
    },

    {
        "type": "gaming",
        "name": "Tier-5",
        "price": "1200€",
        "videoCard": "1660Ti",
        "cpu": "R5 3600X",
        "ram": "16GB 3200 MHz",
        "imgUrl": "https://static.bhphoto.com/images/images1000x1000/1570108237_1507552.jpg"
    },

    {
        "type": "gaming",
        "name": "Tier-6",
        "price": "1400€",
        "videoCard": "5600XT",
        "cpu": "R5 3600X",
        "ram": "16GB 3200 MHz",
        "imgUrl": "https://static.bhphoto.com/images/images500x500/cooler_master_mcb_k500d_kgnn_s00_masterbox_k500_mid_tower_computer_1551702090_1462229.jpg"
    },

    {
        "type": "gaming",
        "name": "Tier-7",
        "price": "1600€",
        "videoCard": "2060SUPER",
        "cpu": "i5 10600K",
        "ram": "32GB 3200 MHz",
        "imgUrl": "https://static.bhphoto.com/images/images500x500/lian_li_pc_o11d_razer_dynamic_chassis_body_secc_1588869980_1560599.jpg"
    },

    {
        "type": "gaming",
        "name": "Compact Tier-7",
        "price": "1700€",
        "videoCard": "5700XT",
        "cpu": "Ryzen 7 3700X",
        "ram": "32GB 3200 MHz",
        "imgUrl": "https://static.bhphoto.com/images/images1000x1000/1589886373_1561463.jpg"
    },

    {
        "type": "gaming",
        "name": "Tier-8",
        "price": "1800€",
        "videoCard": "2070SUPER",
        "cpu": "R7 3800X",
        "ram": "32GB 3600 MHz",
        "imgUrl": "https://static.bhphoto.com/images/images500x500/deepcool_matrexx_55_v3_add_rgb_3f_matrexx_55_v3_atx_1565881879_1499919.jpg"
    },

    {
        "type": "gaming",
        "name": "Tier-9",
        "price": "2300€",
        "videoCard": "2080SUPER",
        "cpu": "i7 10700K",
        "ram": "32GB 3600 MHz",
        "imgUrl": "https://static.bhphoto.com/images/images500x500/nzxt_ca_h710i_b1_h710i_mid_tower_eatx_case_1570109838_1507559.jpg"
    },

    {
        "type": "gaming",
        "name": "Tier-10",
        "price": "3000€",
        "videoCard": "2080Ti",
        "cpu": "R9 3900X",
        "ram": "32GB 3600 MHz",
        "imgUrl": "https://static.bhphoto.com/images/images500x500/cougar_panzer_evo_rgb_black_1530617809_1419774.jpg"
    },

    {
        "type": "gaming",
        "name": "Tier-Ultra",
        "price": "3800€",
        "videoCard": "2x Asus ROG RTX 2080SUPER Strix",
        "cpu": "Ryzen 9 3950X",
        "ram": "Corsair V RGB PRO 64GB 3200 MHz",
        "mobo": "Asus Prime X570-PRO",
        "psu": "Corsair AX1200i",
        "cooling": "Corsair Hydro 100i",
        "storage": "1TB ssd + 4TB hdd",
        "imgUrl": "https://static.bhphoto.com/images/images500x500/lian_li_o11dxl_w_dynamic_xl_rog_certified_1588866371_1560596.jpg"
    },

    {
        "type": "special",
        "name": "Corsair Snow",
        "price": "2400€",
        "videoCard": "MSI RTX 2080Super Gaming X Trio",
        "cpu": "Ryzen 7 3800X",
        "ram": "Corsair V RGB PRO 32GB 3200 MHz",
        "mobo": "Asus Prime X570-PRO",
        "psu": "Corsair RM750X",
        "cooling": "Corsair Hydro 100i",
        "storage": "1TB ssd + 2TB hdd",
        "imgUrl": "https://www.corsair.com/medias/sys_master/images/images/h8d/h61/9190318374942/-CC-9011169-WW-Gallery-680X-RGB-White-01.png"
    },

    {
        "type": "special",
        "name": "Aorus Black",
        "price": "2700€",
        "videoCard": "Gigabyte RTX 2080Super Aorus",
        "cpu": "Intel i7 10700K",
        "ram": "Gigabyte Aorus RGB 32GB 3600 MHz",
        "mobo": "Gigabyte Z390 AORUS MASTER 360",
        "psu": "Gygabyte AP750GM",
        "cooling": "AORUS Liquid Cooler 360",
        "storage": "1TB ssd + 2TB hdd",
        "imgUrl": "https://static.gigabyte.com/Product/9/6812/2019021510461551b7ed57387ec455f2bfe3df81d52c7dba_big.png"
    },

    {
        "type": "special",
        "name": "Asus ROG Thunder",
        "price": "5700€",
        "videoCard": "2x Asus ROG RTX 2080Ti Strix",
        "cpu": "Ryzen 9 3950X",
        "ram": "G.Skill Trident Z RGB 64GB 3600 MHz",
        "mobo": "Asus ROG Crosshair VIII Hero Wi-Fi",
        "psu": "Asus ROG THOR-1200P",
        "cooling": "Asus ROG RYUJIN 360",
        "storage": "2TB ssd + 4TB hdd",
        "imgUrl": "https://www.ddtech.mx/assets/uploads/80a1227314d06651f9cfdfb2d18a1382.jpg"
    }
]

export default builds
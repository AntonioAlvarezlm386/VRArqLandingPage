import { facebook, instagram, mail } from '../assets/svg';
import { creativity, funcionality, innovation, serv1, serv2, serv3, serv4, project11,project12, project13, project21, project22, project23, project31, project32, project33, project41, project42, project43 } from '../assets/img';

export const socialNet = [
    {label : "facebook", icon: facebook, href: 'https://www.facebook.com/profile.php?id=100083574302212'},
    {label : "instagram", icon: instagram, href: 'https://www.instagram.com/arquitecto_rafa.vazquez/'},
    {label : "Mail", icon : mail, href : 'mailto:rafaelmarinm@gmail.com'}
]


export const heroCards = [
    {label: "Creatividad", icon: creativity},
    {label: "Funcionalidad", icon: funcionality},
    {label: "Innovación", icon: innovation}
]


export const services = [
    {
        icon: serv1,
        title: "Dibujo arquitectónico",
        description: "Expertos en el arte del dibujo, trazamos lineas que materializan tus ideas."
    },
    {
        icon: serv2,
        title: "Proyectos arquitectónicos",
        description: "Fusionamos creatividad y funcionalidad para desarrollar espacios innovadores."
    },
    {
        icon: serv3,
        title: "Digitalización de planos",
        description: "Llevamos la arquitectura al mundo digital. Convierte tus planos en modelos 3D realistas y precisos."
    },
    {
        icon: serv4,
        title: "Remodelaciones",
        description: "Transformamos espacios existentes en nuevas experiencias. Ya sea revitalizando ambientes o ampliando estructuras."
    }
]

export const projects = [
    {
        mainData : {
            title: "Digitalización y renderizado de restaurante familiar",
            description: 'Una experiencia visual realista y envolvente para el cliente. Desde la disposición del mobiliario hasta la iluminación.',
            img1 : project11,
    
        }, 
        modalData: {
            resume : "Entendemos que la digitalización y el renderizado 3D juegan un papel fundamental en la conceptualization y visualización de un proyecto. De ahi que se trabajara cuidando que cada elemento desde la disposición de las mesas hasta los detalles decorativos, reflejaran fielmente el diseño propuesto. De esta manera el cliente pudo visualizar y comprender plenamente el diseño antes de la construcción física.",
            img2 : project12,
            img3 : project13
        }
    },
    {
        mainData : {
            title: "Remodelación de casa habitación",
            description: 'Se transformo una casa histórica en un lugar moderno. combinando elementos tradicionales con comodidades contemporáneas',
            img1 : project21,
    
        }, 
        modalData: {
            resume : "Nuestro objetivo fue preservar la autenticidad del diseño original a la ves que se introdujeron mejoras modernas. Se trabajo en la restauración de elementos arquitectónicos clave, y la modernización de instalaciones eléctricas y de fontanería para mejorar la funcionalidad y la eficiencia energética. Esta remodelación centrada en el confort transformó la casa en un refugio moderno que sigue manteniendo su carácter y encanto originales",
            img2 : project22,
            img3 : project23
        }
    },
    {
        mainData : {
            title: "Digitalización de planos y renderizado 3D",
            description: 'Cada detalle fue representado con precisión para una visualización integral y la ejecución eficiente del proyecto.',
            img1 : project31,
    
        }, 
        modalData: {
            resume : "Cada detalle del proyecto fue cuidadosamente reproducido en un entorno virtual, permitiendo una planificación minuciosa y la toma de decisiones informada. Permitiendo una ejecución eficiente y un resultado final que cumple con las expectativas de los clientes y las demandas del mercado residencial moderno.",
            img2 : project32,
            img3 : project33
        }
    },
    {
        mainData : {
            title: "Diseño arquitectónico de una casa habitación",
            description: 'Una expresión de elegancia contemporánea y funcionalidad. Con un enfoque en la armonía entre el interior y el exterior.',
            img1 : project41,
    
        }, 
        modalData: {
            resume : "Este proyecto fue concebido como un refugio moderno que combina la estética contemporánea con la comodidad de la vida diaria. Se cuido cada aspecto del diseño, desde la distribución de los espacios interiores hasta la integración con el espacio circundante. La digitalización 3D permitió al cliente visualizar los detalles y hacer ajustes antes de la construcción física.",
            img2 : project42,
            img3 : project43
        }
    },

]
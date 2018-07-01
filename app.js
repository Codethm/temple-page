const api ="https://codethm.me/api";

var app = new Vue({
    el: '#app',
    data: {
      result: [],
      temples: [
        { nametemple : 'วัดอุโมงค์',
        description :'  วัดอุโมงค์ ตั้งอยู่ที่ ถ.สุเทพ อ.เมือง สร้างขึ้นในสมัยพญามังรายราวปี พ.ศ. 1839 เพื่อให้ฝ่ายอรัญวาสีจำพรรษา ต่อมาพญากือนาทรงสร้างอุโมงค์ขึ้นเพื่อให้พระมหาเถระจันทร์ใช้เป็นที่วิปัสสนากรรมฐาน อุโมงค์นี้มีลักษณะเป็นกำแพงภายในเป็นทางเดินหลายช่องทะลุกันได้        ภายในอุโมงค์เคยมีภาพจิตรกรรมฝาผนัง สันนิษฐานว่าวาดในระหว่าง พ.ศ.1900-2000 แต่เดิมคงเป็นภาพจิตรกรรมเต็มบริเวณของทุกห้อง ส่วนใหญ่เป็นภาพดอกบัว ดอกโบตั๋น และ นกต่างๆ เช่น นกยูง นกกระสา นกแก้ว และนกเป็ดน้ำ  ด้านบนอุโมงค์เป็นเจดีย์ที่มีอายุเก่าแก่ของล้านนา นักโบราณคดีสันนิษฐานว่าสร้างประมาณต้นพุทธศตวรรษที่ 20 เป็นเจดีย์ทรงระฆัง มีชั้นทรงกลมประมาณ 3 ชั้นเหมือนกลีบบัวซ้อนกันอยู่ ด้านบนมีปลียอด ส่วนด้านหน้าอุโมงค์มีเศียรพระพุทธรูปหินสลักสกุลช่างพะเยา พ.ศ.1950-2100 บริเวณวัดเป็นสวนพุทธธรรม ร่มรื่นด้วยแมกไม้นานาพันธุ์ เป็นสวนป่าที่เหมาะกับการนั่งวิปัสสนา ด้านหลังเป็นสวนป่าและสวนสัตว์ซึ่งเป็นเขตอภัยทาน เดินเล่นได้ และเป็นสถานที่ดูนกที่ดีอีกแห่งหนึ่ง',
        see : false,      
        },
        { nametemple : 'วัดต้นเกว๋น',
          description :'  วัดต้นเกว๋น (วัดอินทราวาส) ตั้งอยู่ที่ถนนสายคลองชลประทาน ทางเดียวกับพืชสวนโลก เป็นวัดเล็ก ตัววิหารทำด้วยไม้ทั้งหลัง เป็นไม้เก่าและสลักลวดลายต่างๆ งดงาม ฝีมืออ่อนช้อยตำหรับช่างชาวเชียงใหม่ ด้านในประดิษฐานพระประธานบนแท่นแก้วลวดลายวิจิตร สิ่งที่น่าสนใจคือ ศาลาจตุรมุขซึ่งพบเพียงหลังเดียวในภาคเหนือ นอกจากนี้ศิลปกรรมล้านนาดั้งเดิมภายในวัดนี้ยังจัดว่าเป็นต้นแบบที่สมบูรณ์และมีคุณค่ามาก สมาคมสถาปนิกสยามประกาศให้เป็นอาคารอนุรักษ์ดีเด่นเมื่อปี พ.ศ. 2532 จากความงามแห่งอดีตถูกถ่ายทอดผ่านกาลเวลาอันยาวนาน กลายเป็นแรงบันดาลใจให้สถาปนิกใช้เป็นต้นแบบออกแบบหอคำหลวงซึ่งตั้งตระหง่านอยู่กลางอุทยานหลวงราชพฤกษ์เป็นสัญลักษณ์โดดเด่นและงดงามจับใจทั้งชาวไทยและชาวต่างชาติ หลายๆ ครั้งที่เสน่ห์ของวัดแห่งนี้ติดตรึงใจผู้กำกับละครโทรทัศน์จนกลายเป็นฉากสวยๆในละครหลายเรื่องที่มีเนื้อหาเกี่ยวกับแว่นแคว้นล้านนา',
          see : false  
        },
        { nametemple: 'วัดเจ็ดยอด',
          description :'  วัดเจ็ดยอด ตั้งอยู่ที่ต.ช้างเผือก บนถนนซูเปอร์ไฮเวย์ (เชียงใหม่-ลำปาง) เป็นวัดที่สำคัญและเก่าแก่แห่งหนึ่งของเชียงใหม่ ลักษณะคล้ายกับมหาวิหารโพธิที่พุทธคยาในประเทศอินเดีย ที่ฐานเจดีย์ประดับปูนปั้นรูปเทวดา ด้านนอกพระเจดีย์ ประดับงานปูนปั้นรูปเทวดาทั้งนั่งขัดสมาธิและยืนทรงเครื่องที่มีลวดลายต่างกันไปดูงามน่าชม สถูปเจดีย์พระเจ้าติโลกราช เมื่อพระเจ้าติโลกราชสวรรคตในปี พ.ศ. 2030 พระยอดเชียงราย ราชนัดดาได้สืบราชสมบัติแทน และโปรดให้สร้างสถูปใหญ่บรรจุอัฐิของพระอัยกาธิราช ที่ต่อมาคือสัตตมหาสถาน คือสถานที่สำคัญในพุทธประวัติเจ็ดแห่ง ได้แก่ โพธิบัลลังก์ อนิมิตเจดีย์ รัตนจงกรมเจดีย์ รัตนฆรเจดีย์ อชปาลนิโครธเจดีย์ ราชายตนเจดีย์ ปัจจุบันเหลืออยู่ที่วัดเจ็ดยอดเพียงสามแห่ง คือ อนิมิตเจดีย์ รัตนฆรเจดีย์ มุจจลินทเจดีย์ นอกจากนี้ยังเป็นวัดที่มีการสังคายนาพระไตรปิฎกครั้งที่ 8 ของโลก เป็นครั้งแรกของไทย และถือเป็นหลักปฏิบัติของสงฆ์ในล้านนา วัดเจ็ดยอด จึงเป็นวัดที่มีความสำคัญทางประวัติศาสตร์อย่างยิ่ง อีกทั้งสถาปัตยกรรมภายในวัดก็ยิ่งใหญ่งดงามควรค่าแก่การเคารพบูชาและไปเยี่ยมเยือน',
          see : false
        }
      ]
    },
    mounted() {
      axios.get(api + "/listTemple").then(response => {
        console.log(response.data);
        this.result = response.data;
      })
    },
    methods: {
    }
 })
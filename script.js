// Για να στέλνονται εικόνες (attachments) χρειάζεται υπηρεσία φορμών, π.χ. Formspree.
// Βάλε εδώ το endpoint σου, π.χ. "https://formspree.io/f/xxxxxxx". Αν μείνει κενό, ανοίγει το email πρόγραμμα του επισκέπτη (χωρίς attachment).
const FORM_ENDPOINT = "";
const MAX_MB = 5;

const T={el:{nav_works:"Έργα",nav_about:"Η καλλιτέχνις",nav_contact:"Επικοινωνία",hero_sub:"Ζωγραφική με υφή, φως και φύση.",hero_cta:"Δες τα έργα",
t1:"Η Ήρεμη Δύναμη",s1:"Φθινόπωρο προς χειμώνα",d1:"Ένα ελάφι στέκεται ακίνητο ανάμεσα σε χρυσά δάση και ασπρισμένες κορυφές. Η φύση δεν βιάζεται να αλλάξει εποχή· μεταμορφώνεται με σιγουριά, στρώμα στρώμα. Οι ζεστές αποχρώσεις του φθινοπώρου, κεχριμπάρι, σκουριά και χρυσός, χάνονται σιγά σιγά στο λευκό του χιονιού. Το βλέμμα του ζώου μάς θυμίζει ότι η αλλαγή μπορεί να γίνεται με ηρεμία.",
t2:"Νησί του Ονείρου",s2:"Στοιχεία της φύσης μέσα σε ένα όνειρο",d2:"Δύο έλατα, ένα φεγγάρι και βουνά επιπλέουν πάνω σε μια θάλασσα που κυλά και στάζει προς τα κάτω, σαν να μη χωρά στο πλαίσιο. Όπως στα όνειρα, τα όρια μεταξύ ξηράς, νερού και ουρανού δεν είναι σταθερά. Το γαλάζιο, με τη στροβιλιζόμενη μορφή του, μοιάζει με βαθύ υποσυνείδητο, ενώ το νησί πάνω του είναι η στιγμή που το θυμάσαι όταν ξυπνάς.",
t3:"Χρυσές Αντανακλάσεις",s3:"Φως που μένει στο νερό",d3:"Κάθετες πινελιές και στρώσεις χρώματος θυμίζουν μια πόλη που καθρεφτίζεται στο νερό το σούρουπο. Από τα απαλά ροζ και μπεζ του ουρανού, το έργο κατεβαίνει σε χρυσά, τιρκουάζ και βαθιά γκρι. Δεν δείχνει κάτι συγκεκριμένο: αφήνει τον καθένα να βρει τη δική του θύμηση μέσα στο φως.",
d3b:"Το ιδιαίτερο χαρακτηριστικό του έργου είναι ότι, όπως κι αν κινηθείς στον χώρο, οι χρυσές αντανακλάσεις είναι αυτές που ξεχωρίζουν: φαίνονται και ξεπροβάλλουν περισσότερο από όλα τα υπόλοιπα, από οποιαδήποτε οπτική γωνία.",
a_title:"Η καλλιτέχνις",a1:"Είμαι η Μαριάννα και ζωγραφίζω από τότε που θυμάμαι τον εαυτό μου. Μου αρέσει να πειραματίζομαι με διάφορες μορφές τέχνης και τεχνικές στη δημιουργία των έργων μου.",
a2:"Αυτό που με ξεχωρίζει και προτιμώ είναι να δουλεύω με ζεστά χρώματα, συνδυάζοντας στοιχεία αφηρημένης τέχνης και σουρεαλισμού, και να χρησιμοποιώ ακρυλικά χρώματα σε καμβάδες με την τεχνική της σπάτουλας.",
a3:"Μου αρέσει να ενώνω νοήματα και μηνύματα μέσα από τους πίνακές μου, και εμπνέομαι βαθιά από την κοινωνία και τη φύση.",
c_title:"Επικοινωνία",c_text:"Σε ενδιαφέρει κάποιο έργο ή θέλεις να μου στείλεις ένα μήνυμα; Επίλεξε το θέμα και γράψε μου.",c_name:"Όνομα",c_email:"Το email σου",c_msg:"Μήνυμα",c_amount:"Προσφορά σου (προαιρετικά)",c_file:"Επισύναψη εικόνας (π.χ. screenshot έμπνευσης, έως 5 MB)",c_send:"Αποστολή",
ty:["Προσφορά για κάποιο από τα έργα","Παραγγελία νέου έργου","Έκθεση ή συνεργασία","Άλλο"],pick:"Διάλεξε έργο",
ok:"Ευχαριστώ! Το μήνυμά σου στάλθηκε.",err:"Κάτι πήγε στραβά. Δοκίμασε ξανά ή γράψε μου απευθείας στο email.",big:"Η εικόνα ξεπερνά τα 5 MB. Διάλεξε μικρότερη.",mailnote:"Ανοίγει το email σου. Αν έχεις εικόνα, επισύναψέ την εκεί.",subj:"Μήνυμα από το Mariana’s Art"},
en:{nav_works:"Works",nav_about:"The artist",nav_contact:"Contact",hero_sub:"Painting made of texture, light and nature.",hero_cta:"See the works",
t1:"Quiet Strength",s1:"From autumn into winter",d1:"A stag stands still between golden forests and snow-whitened peaks. Nature is in no hurry to change seasons; it transforms with confidence, layer by layer. The warm tones of autumn, amber, rust and gold, slowly give way to the white of snow. The animal’s gaze reminds us that change can happen calmly.",
t2:"Island of Dreams",s2:"Elements of nature inside a dream",d2:"Two fir trees, a moon and mountains float on a sea that swirls and drips downward, as if it cannot fit the frame. As in dreams, the borders between land, water and sky are not fixed. The swirling blue feels like the deep subconscious, and the island above it is the moment you remember when you wake.",
t3:"Golden Reflections",s3:"Light that stays on the water",d3:"Vertical strokes and layers of colour recall a city mirrored in water at dusk. From the soft pinks and beiges of the sky, the work descends into gold, turquoise and deep grey. It doesn’t show anything specific: it lets everyone find their own memory inside the light.",
d3b:"The special feature of this piece is that, however you move through the space, the golden reflections are what stand out: they are visible and emerge more than everything else, from any angle.",
a_title:"The artist",a1:"I’m Mariana, and I have been painting for as long as I can remember. I love experimenting with different art forms and techniques in creating my works.",
a2:"What sets me apart, and what I prefer, is working with warm colours, combining elements of abstract art and surrealism, and using acrylic paints on canvas with the palette-knife technique.",
a3:"I like to join meanings and messages through my paintings, and I draw deep inspiration from society and nature.",
c_title:"Contact",c_text:"Interested in a piece, or want to send me a message? Choose a topic and write to me.",c_name:"Name",c_email:"Your email",c_msg:"Message",c_amount:"Your offer (optional)",c_file:"Attach an image (e.g. an inspiration screenshot, up to 5 MB)",c_send:"Send",
ty:["Offer for one of the works","Commission a new piece","Exhibition or collaboration","Other"],pick:"Choose a work",
ok:"Thank you! Your message has been sent.",err:"Something went wrong. Please try again or email me directly.",big:"The image is over 5 MB. Please choose a smaller one.",mailnote:"Your email app will open. If you have an image, attach it there.",subj:"Message from Mariana’s Art"}};
const $=s=>document.querySelector(s);
const TYPES=["offer","commission","collab","other"];
function setLang(l){const t=T[l];document.documentElement.lang=l;
document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=t[e.dataset.i18n]);
document.querySelectorAll('[data-i18n-ph]').forEach(e=>e.placeholder=t[e.dataset.i18nPh]);
fill($('#type'),t.ty,TYPES);fill($('#work'),[t.t1,t.t2,t.t3],[t.t1,t.t2,t.t3],t.pick);toggle();
$('#lang').textContent=l==='el'?'EN':'GR';try{localStorage.setItem('lang',l)}catch(e){}}
function fill(sel,labels,vals,ph){const cur=sel.selectedIndex;sel.innerHTML=(ph?`<option value="" disabled>${ph}</option>`:'')+labels.map((x,i)=>`<option value="${vals[i]}">${x}</option>`).join('');sel.selectedIndex=cur>0?cur:(ph?0:0)}
function toggle(){const v=$('#type').value;$('#work').hidden=$('#amount').hidden=v!=='offer';$('#work').required=v==='offer';$('#fileBox').hidden=!(v==='commission'||v==='other'||v==='offer')}
$('#type').onchange=toggle;
$('#lang').onclick=()=>setLang(document.documentElement.lang==='el'?'en':'el');
let saved;try{saved=localStorage.getItem('lang')}catch(e){}
setLang(saved==='en'?'en':'el');
$('#yr').textContent=new Date().getFullYear();

$('#form').onsubmit=async e=>{e.preventDefault();const l=document.documentElement.lang,t=T[l],st=$('#status');
const f=$('#file').files[0];if(f&&f.size>MAX_MB*1048576){st.textContent=t.big;return}
const typeLbl=$('#type').selectedOptions[0].textContent,work=$('#work').hidden?'':$('#work').value,amt=$('#amount').hidden?'':$('#amount').value;
const body=[typeLbl,work&&('→ '+work),amt&&('€ '+amt)].filter(Boolean).join('\n')+'\n\n'+$('#msg').value+'\n\n— '+$('#name').value+' <'+$('#email').value+'>';
if(FORM_ENDPOINT){try{const fd=new FormData();fd.append('name',$('#name').value);fd.append('email',$('#email').value);fd.append('_subject',t.subj+': '+typeLbl);fd.append('message',body);if(f)fd.append('attachment',f);
const r=await fetch(FORM_ENDPOINT,{method:'POST',body:fd,headers:{Accept:'application/json'}});if(!r.ok)throw 0;st.textContent=t.ok;$('#form').reset();toggle()}catch(x){st.textContent=t.err}}
else{st.textContent=f?t.mailnote:'';location.href='mailto:ms@experience-designers.com?subject='+encodeURIComponent(t.subj+': '+typeLbl)+'&body='+encodeURIComponent(body)}};

const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.pop,.from-l,.from-r').forEach((e,i)=>{if(e.classList.contains('pop'))e.style.transitionDelay=(i%3)*.18+'s';io.observe(e)});
const par=[...document.querySelectorAll('.par')],hero=$('.hero-img');
let tick=false;function frame(){tick=false;const h=innerHeight;
par.forEach(p=>{const r=p.getBoundingClientRect();p.style.setProperty('--py',((r.top+r.height/2-h/2)*parseFloat(p.dataset.speed)).toFixed(1)+'px')});
if(hero&&scrollY<h)hero.style.translate='0 '+(scrollY*.25)+'px'}
addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(frame)}},{passive:true});frame();

import React from 'react';
import { Segment, Image, Divider, Header, Dimmer, Loader, Menu, Input } from 'semantic-ui-react';

function Second(){
    return(
        <div className='sfirst'>
             <div className='main-head'>
                <h1>MOTHERHOOD IN PANDEMIC</h1>
            </div>
            {/* <Menu secondary>
                <Menu.Menu position='right'>
                <Input icon='search' placeholder='Search...' />
                </Menu.Menu>
            </Menu> */}
       
        <h3 className='shead'>Breastfeeding</h3>
      <p>
      Breastfeeding is one of the most effective ways to ensure child health and survival.Breastmilk is the ideal food for infants. It is safe, clean and contains antibodies which help protect against many common childhood illnesses. Breastmilk provides all the energy and nutrients that the infant needs for the first months of life, and it continues to provide up to half or more of a child’s nutritional needs during the second half of the first year, and up to one third during the second year of life. 

Breastfed children perform better on intelligence tests, are less likely to be overweight or obese and less prone to diabetes later in life. Women who breastfeed also have a reduced risk of breast and ovarian cancers. Please breastfeed your newborn as much as possible on demand as it helps to build their immunity and resistance against infections. Research suggests that breastfed babies show little or no impact of the virus. If you are tested positive with coronavirus, you may wear a mask and continue to breastfeed your baby as your antibodies will help prevent infection your little one. </p>

<h3 className='shead'>Follow good hygiene and sanitation</h3>
<p>
Covering the mouth and nose when coughing or sneezing is a must. Further, babies under 2 years of age should not wear a mask as they have smaller airways and breathing under a cloth covering is harder for them. Please make sure anyone who enters your home, maid or cook, sanitise themselves properly before attending to the baby and wear a mask at all times. Also, make sure you follow a safe and hygienic preparation of food for your little one - using separate chopping boards, washing your hands between handling raw and cooked food. It is equally important to stay informed about the latest information on coronavirus and follow advice. Seek advice from trustworthy and reliable sources only. For better knowledge and awareness, stay in touch with your child's healthcare professional.
</p>

    <Image src='https://st1.thehealthsite.com/wp-content/uploads/2013/11/new-born-baby.jpg' size="medium" floated='right' />
    
    
      <h3 className='shead'>Care for Newborns</h3>
      <p>
      As Coronavirus continues to spread, we are exploring and learning more about the virus and the ways to protect ourselves from it - from following social distancing to washing hands well and often and wearing masks in public. While these are the safety measures for adults, parents might wonder how they can protect their babies and toddlers. Since the May 2020 posting of this guidance, several publications have reported the outcomes of neonates born to mothers with suspected or confirmed COVID-19 infection. Although testing is recommended for all neonates born to mothers with suspected or confirmed COVID-19, regardless of whether there are signs of infection in the neonate. 
      </p>

      <h3 className='shead'>A case study</h3>
      <p>
      A 33-year-old pregnant woman, whose last menstrual period was July 9, 2019, experienced her early pregnancy smoothly. Before January 23, 2020, she was doing fine and was in normal condition. Her colleague's father was hospitalized due to confirmed coronavirus at the end of December 2019, and the colleague developed fever symptoms after taking care of his father in the hospital and was later confirmed with the sever acute respiratory syndrome coronavirus 2 (SARS-CoV-2) by quantitative real time polymerase chain reaction from throat swab. The pregnant woman with 28 + 5 weeks gestation developed cough and expectoration on January 26, 2020, and then had a fever on January 27 with her body temperature fluctuating between 37.5°C and 37.8°C. She was diagnosed with common pneumonia and treated by oral cephalosporin at a community hospital for 3 days. 
      </p>
      <p>
      At the same time, she was tested negative for influenza A and B virus antigens, Mycoplasma pneumoniae, and Chlamydia pneumoniae. Based on the criteria of COVID-19 pneumonia released by the National Health Commission of China on February 3, 2020, she was diagnosed as a clinically confirmed case, so quarantine treatment combined with nebulized inhalation and oral cephalosporin was applied for her. Five days later (30 weeks gestation), her body temperature returned to normal and the symptoms such as cough and expectoration disappeared. 
      </p>
      <p>
      On April 5, 2020, at the gestational age of 38 weeks and 5 days, the pregnant woman was admitted to the hospital with small amount of vaginal bleeding. The admission check showed that her body temperature was 36.4°C, heart rate was 78 bpm, respiratory rate was 20 bpm, blood pressure was 111/61 mm Hg. No abnormalities were heard on cardiopulmonary auscultation. On the day of admission, she underwent cesarean delivery (CD) due to her previous CD in 2015. The operation went smoothly. The birth weight of the newborn was 3200 g, and the 1-minute and 5-minute Apgar scores were all 10. The newborn was tested with the COVID-19 Colloidal Gold method on the birth day by serum, and the test result was positive for IgG and negative for IgM. On April 7, 2020, the pharyngeal swab test for the newborn revealed negative. During hospitalization, she developed no fever, cough or other symptoms. Five days after CD, she was discharged.
      </p>
      <Image src='https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/coronavirus/superhero-punching-germ.ashx' size='medium' centered/>  
      <h3 className='shead'>Prevention and Control</h3>
      <p>
      Rates of SARS-CoV-2 infection in neonates do not appear to be affected by mode of delivery, method of infant feeding, or contact with a mother with suspected or confirmed SARS-CoV-2 infection. All neonates born to mothers with suspected or confirmed infection should be considered as having suspected SARS-CoV-2 infection when test results are not available.
      </p>
      <p>
      <h4 className='shead'>Get vaccinated against influenza (or flu)
</h4>
Flu and COVID-19 are both respiratory illnesses that can spread from person to person. They can affect breathing and have similar symptoms, but they are caused by different viruses. It is unknown how these two viruses may interact during the upcoming flu season.
You should protect yourself against flu by getting vaccinated. Others living in your household should also get vaccinated to protect themselves and you.
      </p>

      <h4 className='shead'>Caring for newborns when the mother has COVID-19</h4>
      <Image src='https://www.cdc.gov/coronavirus/2019-ncov/images/lady-holding-baby-mask-01.jpg' size="medium" floated='right' />
      <p>
      Much is still unknown about the risks of COVID-19 to newborns born to mothers with COVID-19. We do know that:
      <ol>
          <li>
          Infections causing COVID-19 in newborns born to mothers with COVID-19 are uncommon
          </li>
          <li>
          Some newborns have tested positive for the virus that causes COVID-19 shortly after birth. It is unknown if these newborns got the virus before, during, or after birth from close contact with an infected person.
          </li>
          <li>
          Most newborns who tested positive for the virus that causes COVID-19 had mild or no symptoms and recovered. However, there are a few reports of newborns with severe COVID-19 illness.
          </li>
          <li>
          Preterm (less than 37 completed weeks gestation) birth and other problems with pregnancy and birth have been reported among women who tested positive for COVID-19 during pregnancy. It is unknown whether these problems were related to the virus that causes COVID-19.
          </li>
      </ol>
      </p>
      
      <p>
      <h3 className='shead'>Decide if your newborn is rooming-in with you in the hospital!</h3>
      CDC recognizes that the ideal setting for the care of a healthy, full-term newborn during the birth hospitalization is within the mother’s room (“rooming-in”). Current evidence suggests that the risk of a newborn getting COVID-19 from its mother is low, especially when she uses appropriate precautions before and during care of the newborn, such as wearing a mask and practicing hand hygiene.

<p>If you are diagnosed with or test positive for the virus that causes COVID-19, you should discuss with your healthcare provider the risks and benefits of having your newborn stay in the same room with you. This conversation should begin during prenatal care if possible. Having your newborn stay with you in the same room has the benefit of facilitating breastfeeding and maternal-newborn bonding. Potential risks may include giving the virus to the newborn, although current evidence suggests the risk of a newborn getting COVID-19 from their mother is low if precautions are taken. After discussing, make an informed decision of whether your newborn is staying in the same room with you while in the hospital.</p>
      </p>
      <Image src='https://image.spreadshirtmedia.com/image-server/v1/mp/compositions/T650A1MPA3583PT17X90Y48D1013498064FS21799Cx000000/views/1,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true,version=1571721912/i-hope-you-are-doing-well-uppercase-mens-tall-t-shirt.jpg' size='small' centered/>

    {/* <Image src='https://i.pinimg.com/736x/19/50/14/1950142aab38f49c94aa8d1ae8746134.jpg' size='large' circular centered/> */}


    </div>
    )
}

export default Second;
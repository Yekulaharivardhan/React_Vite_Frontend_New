import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Information = () => {
    const navref = useRef(null)
 
    useEffect(() => {
        const setScrollPadding = () => {
            if (navref.current) {
                const navigationHeight = navref.current.offsetHeight + 8 + 'px';
                document.documentElement.style.setProperty('--scroll-padding', navigationHeight);
            }
        };

        // Call setScrollPadding once after the initial render
        setScrollPadding();

        // Attach an event listener for window resize, in case the height changes dynamically
        window.addEventListener('resize', setScrollPadding);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', setScrollPadding);
        };
    }, []);



    return (
        <div>
            <div ref={navref} className=" position-fixed   rounded shadow text-white fw-bold sticky_card_Nav" style={{right:"1%", padding: "10px", top: "18%", cursor: "pointer", backgroundColor: "#7077A1", }}>

                <div className='nav_link_senction gap-3 text-decoration-none'>
                    <p><a className=" " href="#one">About </a></p>
                    <p><a className="" href="#two">Content</a></p>
                    <p><a className="" href="#three">Features</a></p>
                    <p><a className="" href="#four">Payments</a></p>
                </div>
            </div>
            <div className='info_main mt-5'>
                <div id='one' className='child  bg-light'>
                    <h1>About</h1>
                    <h6 className=' '>Harivardhan Yekula</h6>
                    <ul className=''>
                        <li>📱 Contact No: 8179876715</li>
                        <li>📧 Email: harivardhan.yekula@gmail.com</li>
                        <li>📍 Address: 112-isma manzil,
                            road no-9, satya enclave, bandamkommu, chandanagar-500050</li>
                    </ul>

                    <h6>Professional Experience</h6>
                    Quantana Indian Pvt Ltd
                    Position: React Front-End Developer
                    Duration: 1.4 years (Current)

                    Developed and maintained dynamic and responsive user interfaces using React.js.
                    Collaborated with cross-functional teams to implement UI/UX designs and enhancements.
                    Utilized HTML, CSS, JavaScript, React.js, and Bootstrap to create interactive web applications.
                    Managed data and performed analysis using MS Excel.
                    <h6>Technical Skills</h6>
                    Languages: HTML, CSS, JavaScript
                    Library/Framework: React.js, Bootstrap
                    Tools: MS Excel
                    <h6>Education</h6>
                    B.Tech in Information Technology
                    Jawaharlal Nehru Technological University Hyderabad (JNTUH)

                    <h6>Projects</h6>
                    TrialTrak (Current Project)

                    Description: Involved in the development of a medicine research platform.
                    Technologies Used: React.js, HTML, CSS, Bootstrap.
                    Bennefin-Finance

                    Description: Contributed to the development of a finance application.
                    Technologies Used: React.js, HTML, CSS.
                    ISB-eLearning

                    Description: Collaborated on an eLearning platform for ISB.
                    Technologies Used: React.js, HTML, CSS, Bootstrap.
                    <hr />
                    Languages Known
                    <li>English</li>
                    <li>Telugu</li>
                    <li>Hindi</li>
                    <li>Kannada</li>


                    <hr />

                </div>
                <div id='two' className='child bg-success bg-opacity-50 text-white'>
                    <h1>Content</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid blanditiis assumenda? Autem quae architecto quibusdam pariatur, ipsa eaque cum inventore a, incidunt, at quasi aperiam voluptates culpa perferendis. Dolorum libero ratione at, aperiam dolor fugit corporis quae! Laborum magni praesentium voluptas quod libero sint cupiditate laboriosam inventore. Voluptatibus, sed ab? Quis, at sunt nostrum provident est culpa maiores itaque necessitatibus obcaecati voluptatibus sit, illo omnis voluptate libero. Nulla animi rerum illo vitae accusantium dolorem, quos, eveniet, sit natus exercitationem excepturi minima quo vero tempora ipsa numquam minus iste soluta ipsam fugit dolor voluptas laborum eos. Hic error, nostrum dolor perspiciatis dolorum nihil impedit illo expedita quos pariatur sequi aperiam ipsum libero ad officia sapiente, animi rerum excepturi. Sint obcaecati fugiat aliquam enim alias temporibus nesciunt amet? Eius, soluta. Sed natus unde ipsum itaque ab voluptas est sunt possimus eius cumque? Eum autem voluptatum odio delectus, minus quas ipsam nulla mollitia tempore commodi totam! Libero sunt alias non odit! Minima hic velit reprehenderit mollitia inventore dolorum delectus amet, ab, ullam porro ut dolor officia corrupti, voluptatum quae error corporis! Provident cupiditate, ducimus sint commodi modi vel esse explicabo ab deserunt unde id, aperiam maiores. Fuga consequuntur culpa consequatur error fugit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, qui quod laborum, ullam cum omnis eaque quae, odio quaerat autem explicabo! Harum rem tempore qui earum, id odit, doloribus suscipit velit laborum repellendus laudantium reiciendis consectetur ad cupiditate! Quae neque aliquid quisquam maiores corporis ratione ducimus saepe numquam laudantium dolor quidem rerum fugiat, doloribus sequi. Assumenda reiciendis facilis quia, consequuntur tempore perspiciatis placeat officia rerum explicabo ex eum at sequi adipisci accusamus iste illo nihil suscipit a eaque earum nesciunt vero cum? Recusandae doloremque quis maiores aspernatur, magnam exercitationem accusamus qui illum blanditiis, numquam impedit architecto aut ipsa quia quidem. Doloremque dolores iusto accusantium cupiditate mollitia placeat, maiores ex recusandae voluptatem quidem autem libero, porro modi dicta et, sapiente debitis nisi ipsa quis aliquam reiciendis ullam itaque inventore voluptates? Aspernatur pariatur adipisci magnam necessitatibus veritatis asperiores officiis eos quasi et rem! Totam laboriosam ipsa impedit dolores deleniti deserunt temporibus maxime natus, ea labore nulla. Quo consectetur esse voluptate illum atque adipisci, earum laudantium. Voluptates ullam iure magnam ut consequatur laborum, sit amet! Iste repudiandae reprehenderit ad quo. Nostrum, eum. Minima vero repudiandae dignissimos fugit laboriosam! Maxime consectetur at accusamus culpa. Minima, assumenda. Facere maxime aliquam tempora alias nemo. Laboriosam, tenetur?
                </div>
                <div id='three' className='child bg-light'>

                    <h1>Features</h1>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci animi quaerat voluptatem laboriosam ratione! Rerum accusamus sunt officiis quas, minima magnam harum laboriosam nam asperiores nesciunt, eveniet sit nobis esse. Rerum architecto officiis necessitatibus perspiciatis cum minima numquam repellendus nisi accusamus sequi sit fugit sunt delectus adipisci, quibusdam temporibus in alias illum neque autem ea magni et minus. Vero aut ipsa ab provident exercitationem! Quaerat voluptatibus ab, dignissimos a illo quas porro iste unde et, excepturi atque quae voluptatem odit dolorum distinctio suscipit. Earum quibusdam similique autem ab facere eaque sit blanditiis id reprehenderit ex. Placeat, quisquam? Suscipit beatae temporibus, maxime voluptatem ab repudiandae quos in illum accusantium ducimus, voluptate eos perferendis quo dolorum natus? Commodi labore, ut rerum quidem nemo fugit alias minus aliquid doloribus, vero expedita earum aspernatur ipsum cum hic veniam nulla quasi, laborum obcaecati. Accusamus, harum sed aspernatur sint quam magni nulla pariatur laborum non, eius tempore tempora obcaecati molestiae labore unde nemo saepe eaque nostrum magnam voluptates. Fugiat dolor inventore vitae eveniet exercitationem sed cupiditate dolores quo, asperiores illum atque in nam alias ut sequi magnam labore? Eum voluptate, at unde laudantium ab tempora sed dolorem quibusdam nisi quae ea veritatis quisquam est praesentium quas atque porro asperiores eius, consectetur, beatae error qui laboriosam? Cupiditate, culpa! Deserunt, cum veniam aperiam quae placeat quod dolor debitis dolores eius eveniet sint illo ea ipsa suscipit vel omnis! Dolores quod facere, eveniet eum atque libero quis porro placeat ipsum facilis maxime? Ab qui itaque quae dolorem quisquam fuga voluptas, sapiente, error nihil illo temporibus, quo ipsam natus fugiat impedit amet accusantium adipisci dicta veritatis fugit consequuntur? Voluptas quaerat nisi alias amet aliquam, commodi vitae. Architecto alias ut similique ducimus aliquam quas veniam molestiae, error dicta, asperiores tenetur quia laboriosam suscipit reiciendis ab consectetur laudantium unde, maxime ex! Dolore quaerat quidem eaque deserunt modi nam. Amet odit cupiditate quos exercitationem animi sunt, mollitia maiores, dolorem illum sit architecto repellat necessitatibus ad magni excepturi iste perspiciatis et odio possimus ratione! Amet sequi itaque quam, pariatur officiis odit iste eum aperiam tempore necessitatibus numquam sed nobis, aliquid soluta minus sunt rerum quis ipsam. Rem eius voluptatum illo eveniet sed consectetur id tenetur vel, error consequuntur repudiandae numquam aperiam eaque repellendus inventore blanditiis atque, officiis quisquam nihil. Nobis quidem consectetur numquam, incidunt delectus deserunt ea pariatur nemo, aspernatur ex maiores expedita. Consectetur dolorem necessitatibus magni cum tempora similique obcaecati sit. Iure maxime soluta omnis eligendi quia porro veritatis, eos unde ea non repellat sit, debitis reprehenderit perferendis assumenda molestias illo exercitationem. Id hic magni, expedita, a molestias similique corrupti doloribus amet excepturi eum dolorem, mollitia soluta! Provident distinctio unde, amet ad reprehenderit culpa. Dolores laboriosam eaque sit provident magni dolorum, omnis ipsum iste molestias culpa repudiandae! Officiis doloribus eaque dignissimos natus fugiat animi maiores laudantium omnis quo dicta. Odit perferendis dolores, magni nisi sequi repellat architecto aliquam eos ex quidem molestias consectetur dolore laborum. Totam soluta cupiditate deleniti incidunt possimus dicta, aut debitis quasi cumque omnis iusto, recusandae ullam praesentium, rerum ipsa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, qui quod laborum, ullam cum omnis eaque quae, odio quaerat autem explicabo! Harum rem tempore qui earum, id odit, doloribus suscipit velit laborum repellendus laudantium reiciendis consectetur ad cupiditate! Quae neque aliquid quisquam maiores corporis ratione ducimus saepe numquam laudantium dolor quidem rerum fugiat, doloribus sequi. Assumenda reiciendis facilis quia, consequuntur tempore perspiciatis placeat officia rerum explicabo ex eum at sequi adipisci accusamus iste illo nihil suscipit a eaque earum nesciunt vero cum? Recusandae doloremque quis maiores aspernatur, magnam exercitationem accusamus qui illum blanditiis, numquam impedit architecto aut ipsa quia quidem. Doloremque dolores iusto accusantium cupiditate mollitia placeat, maiores ex recusandae voluptatem quidem autem libero, porro modi dicta et, sapiente debitis nisi ipsa quis aliquam reiciendis ullam itaque inventore voluptates? Aspernatur pariatur adipisci magnam necessitatibus veritatis asperiores officiis eos quasi et rem! Totam laboriosam ipsa impedit dolores deleniti deserunt temporibus maxime natus, ea labore nulla. Quo consectetur esse voluptate illum atque adipisci, earum laudantium. Voluptates ullam iure magnam ut consequatur laborum, sit amet! Iste repudiandae reprehenderit ad quo. Nostrum, eum. Minima vero repudiandae dignissimos fugit laboriosam! Maxime consectetur at accusamus culpa. Minima, assumenda. Facere maxime aliquam tempora alias nemo. Laboriosam, tenetur?
                </div>
                <div id='four' className='child  w-100 bg-secondary bg-opacity-50 text-light lh-base'>
                    <h1>Payments</h1>
                    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <div class="col">
                            <div class="card mb-4 rounded-3 shadow-sm">
                                <div class="card-header py-3">
                                    <h4 class="my-0 fw-normal">Free</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title">$0<small class="text-body-secondary fw-light">/mo</small></h1>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>10 users included</li>
                                        <li>2 GB of storage</li>
                                        <li>Email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button type="button" class="w-100 btn btn-lg btn-outline-dark">Sign up for free</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-4 rounded-3 shadow-sm">
                                <div class="card-header py-3">
                                    <h4 class="my-0 fw-normal">Pro</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title">$15<small class="text-body-secondary fw-light">/mo</small></h1>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>20 users included</li>
                                        <li>10 GB of storage</li>
                                        <li>Priority email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button type="button" class="w-100 btn btn-lg btn-outline-primary">Get started</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-4 rounded-3 shadow-sm border-primary">
                                <div class="card-header py-3 text-bg-primary border-primary">
                                    <h4 class="my-0 fw-normal">Enterprise</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title">$29<small class="text-body-secondary fw-light">/mo</small></h1>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>30 users included</li>
                                        <li>15 GB of storage</li>
                                        <li>Phone and email support</li>
                                        <li>Help center access</li>
                                    </ul>
                                    <button type="button" class="w-100 btn btn-lg btn-outline-success">Contact us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Information;
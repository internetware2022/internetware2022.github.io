<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <title>Internetware 2022</title>
    <link href="https://fonts.font.im/css?family=Lato|Roboto" rel="stylesheet">
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="Home.css" />
    <link rel="shortcut icon" href="images/internetware-logo.png">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
</head>

<body>
    <div class="container mx-auto px-6 space-y-6 max-w-screen-lg pt-10">
        <div class="flex px-6">
            <img class="float-left" src="./images/internetware-logo.png" style="height:8em">
            <div class="pl-4" style="width:60%">
                <h1 class="pt-4">Internetware 2022</h1>
                <h2>Hohhot, China, June 11-12, 2022</h2>
            </div>
            <img class="float-right" src="./images/internetware-name.jpg" style="height:8em">
        </div>
        <div class="flex flex-col" id="total">
            <div class="flex flex-flow">
                <div class="flex-none">
                    <div class="choice">
                        <button id="b1" class="Button" v-on:click="changx(1)"
                            style="background-color: rgb(42, 75, 182);color: white;">Home</button>
                        <button id="b2" class="Button" v-on:click="changx(2)">Program</button>
                        <button id="b3" class="Button" v-on:click="changx(3)">Keynote</button>
                        <button id="b4" class="Button" v-on:click="changx(4)">Call For Papers</button>
                        <button id="b5" class="Button" v-on:click="changx(5)">Important Dates</button>
                        <button id="b6" class="Button" v-on:click="changx(6)">Committee</button>
                        <button id="b7" class="Button" v-on:click="changx(7)">Venue and Access</button>
                        <button id="b8" class="Button" v-on:click="changx(8)">Accommodation</button>
                        <button id="b9" class="Button" v-on:click="changx(9)">Travel and Foods</button>

                    </div>
                    <br>
                    <div class="choice">
                        <div class="Button">Sponsors</div>
                        <img src="./images/Sponsors.png" alt="" style="width: 100%;">
                    </div>
                </div>
                <div class="flex-1">
                    <div id="d1" class="d pages" style="display: block;">
                        <div class="flex flex-flow space-x-4 pb-6">
                            <img class="w-40 rounded" src="./images/Home01.jpeg">
                            <img class="w-40 rounded" src="./images/Home02.jpeg">
                            <img class="w-40 rounded" src="./images/Home03.jpeg">
                            <img class="w-40 rounded" src="./images/Home04.jpeg">
                        </div>

                        <h3>Welcome to Internetware 2022!</h3>
                        <p>Internetware 2022, the <em>13th Asia-Pacific Symposium on Internetware</em>, provides a forum
                            for researchers and practitioners to discuss the trending software technologies in the
                            Internet era.</p>
                        <p>Internet provides an open global infrastructure for exchanging and sharing resources for
                            people all over the world. The rapid development and the wide application of Internet make
                            it become a new mainstream platform for software to be used, developed, deployed, and
                            executed. With the vision of “Internet as a Computer”, many application styles such as
                            pervasive computing, grid computing, service computing, and cloud computing emerged in this
                            open and dynamic environment.</p>
                        <p>To support new forms of applications and accommodate the fundamental changes of the
                            underlying supporting platform, software technologies such as service-oriented architecture
                            are proposed for current practices. However, these popular technologies are far from
                            systematic and complete because no uniform software methodology and technology system like
                            the object-oriented one is provided.</p>
                        <p>Software in the Internet era should autonomously, cooperatively, situationally, emergently,
                            and trustworthily adapt to the new environment. The software entities dispersed on
                            distributed nodes over the Internet, which evolved from objects in object-oriented
                            methodology to software components (component-based software development), now are further
                            turned into self-contained, autonomous and adaptive software services in service-oriented
                            computing of state-of-arts. These software entities are coordinated statically and
                            dynamically in various interaction styles (passively and actively) such as integration,
                            cooperation, and orchestration to achieve flexible design objectives. So a so-called
                            “software-web” instead of information-web is weaved. This software-web as a whole can
                            perceive the changes of open, dynamic, and uncertain environments and respond to them in the
                            way of transforming architectures. Furthermore, the flexible design objective of the
                            software-web is reflected by its exhibiting several compatible goal-directed behaviors
                            according to its up-to-date knowledge about the outside environment.</p>
                        <p>Therefore, a portmanteau term “Internetware” is used to denote the future software-web in
                            open and dynamic environment, which can be defined as follows: an Internetware system is a
                            software system consists of the self-contained, autonomous entities situated in the
                            distributed nodes of Internet and the coordinators connecting these entities statically and
                            dynamically in various kinds of interaction styles (passively and actively). As a whole, an
                            Internetware system is able to perceive the changes of open and dynamic environment such as
                            Internet, respond to the changes in the way of architectural transformation, and exhibit
                            context-aware, adaptive and trustworthy behaviors in the open and dynamic environment in
                            order to meet its flexible design objectives. Internetware challenges many aspects of
                            software technologies, from operating platforms, programming models, to engineering
                            approaches, etc.</p>
                    </div>
                    <div id="d2" class="d pages">
                        <h3>Keynotes</h3>
                        <p>TBD</p>
                    </div>
                    <div id="d3" class="d pages">
                        <h3>Program</h3>
                        <p>TBD</p>
                    </div>
                    <div id="d4" class="d pages">
                        <h3>Call for Papers</h3>
                        <p>Internet is open, dynamic, and meets a constantly changing environment. Software, being
                            architected like the Internet, developed with the Internet, operated on the Internet,
                            connects the human, cyber, and physical world. Internetware ought to be autonomous,
                            cooperative, situational, evolvable, emergent, and trustworthy, but these requirements pose
                            unique challenges for software technologies to support Internetware's construction,
                            deployment, and use.</p>
                        <p>This symposium aims to provide an interactive forum where researchers and professionals from
                            multiple disciplines and domains meet and exchange ideas to explore and address the
                            challenges brought by Internetware.</p>
                        <p>Internetware 2022 will be held June 11-12 in Hohhot, China. We solicit submissions describing
                            original and unpublished results of theoretical, empirical, conceptual, and experimental
                            software engineering research related to Internetware. Topics of interests include but are
                            not limited to:</p>
                        <ul>
                            <li>Novel software paradigm for Internetware</li>
                            <li>Modeling and implementation of Internetware</li>
                            <li>Requirements engineering for Internetware</li>
                            <li>Software analysis, verification and testing</li>
                            <li>Mining software repositories</li>
                            <li>Software dependability, trustworthiness and confidence</li>
                            <li>Software architecture and design</li>
                            <li>Crowd-based methods, techniques and tools for Internetware</li>
                            <li>Social-technical models and techniques</li>
                            <li>Software ecosystem practices and experiences</li>
                            <li>Software models and techniques for Internet-based systems such as Cloud Computing,
                                Service Computing, Social commputing, Mobile Internet, Internet of Things, and
                                Cyber-Physical Systems</li>
                            <li>Software engineering for/with Big data</li>
                            <li>Software engineering for/with Artificial Intelligence</li>
                        </ul>
                        <h3>Main Conference</h3>
                        <p>Following types of papers are welcomed to Internetware 2022:</p>
                        <ul>
                            <li><strong><u>Technical research papers</u></strong> for solid technical contributions to
                                Internetware. Technical research papers must not exceed 10 pages for all text, figures,
                                tables, and references. </li>
                            <li><strong><u>Short papers</u></strong> for early announcements on breaking research
                                results. Short papers must not exceed 6 pages for all text, figures, tables, and
                                references. </li>
                        </ul>
                        <p>Best papers submitted to the technical research track will be selected and invited to submit
                            an extended version to the <a href="https://www.springer.com/journal/11390">Journal of
                                Computer Science and Technology</a>. All extended submissions will be evaluated
                            following the guidelines of the corresponding journal. Only those satisfying all the
                            criteria will be accepted for the journal publication.</p>
                        <h3>Special Tracks</h3>
                        <p>Best papers submitted to a special track will be first accept to Internetware 2022
                            proceedings, and then be invited to submit an extended version to the corresponding
                            journals. All extended submissions will be evaluated following the guidelines of the
                            corresponding journal. Only those satisfying all the criteria will be accepted for the
                            journal publication.</p>

                        <a href="./Special_Track-Intelligent_Software_Engineering.html" style="color: blue;">Special
                            Track-Intelligent Software
                            Engineering</a>
                        <h3>Submission</h3>
                        <p>All papers (main conference or special track) must be submitted electronically through <a
                                href="https://easychair.org/conferences/?conf=internetware2022">EasyChair</a>. Please
                            specify the track of your submission. All submissions must be in English and in PDF format.
                            Submissions that do not comply with the above instructions will be desk rejected without
                            review. Please use the ACM Master article template, as can be obtained from the <a
                                href="https://www.acm.org/publications/proceedings-template">ACM Proceedings
                                Template</a> pages.</p>
                        <p>Important dates:</p>
                        <ul>
                            <li>Submission Deadline: February 20, 2022</li>
                            <li>Notification of Acceptance: April 17, 2022</li>
                            <li>Camera-Ready Version: April 30, 2022</li>
                        </ul>
                        <div style="display: none;">
                            <h3>Camera-Ready Instructions</h3>
                            <p>Accepted Full papers must not exceed 10 pages for all text, figures, tables, and
                                references. Accepted short papers must not exceed 6 pages for all text, figures,
                                tables, and references. Please upload the camera copy via EasyChair. When
                                uploading
                                the camera copy, you must upload manuscripts including the source files and
                                PDFs.
                                You can compress the files in a zip file and upload the zip file.</p>

                            <h3>Publication</h3>
                            <p>All authors of accepted papers of will be asked to complete an electronic ACM
                                Copyright form and will receive further instructions for preparing their camera
                                ready versions. All accepted contributions will be published in the
                                Internetware2022 electronic proceedings and in the ACM Digital Library. </p>
                        </div>
                    </div>
                    <div id="d5" class="d pages">
                        <h3>Important Dates</h3>
                        <ul>
                            <li>Submission Deadline: February 20, 2022</li>
                            <li>Notification of Acceptance: April 17, 2022</li>
                            <li>Camera-Ready Version: April 30, 2022</li>
                        </ul>
                    </div>
                    <div id="d6" class="d pages">
                        <h3>Steering Committee</h3>
                        <h4>Co-Chairs</h4>
                        <ul>
                            <li>Hong Mei, Peking University, China</li>
                            <li>Jian Lyu, Nanjing University, China</li>
                        </ul>
                        <h4>Members</h4>
                        <ul>
                            <li>Zhi Jin, Peking University, China</li>
                            <li>Tao Huang, Chinese Academy of Sciences, China</li>
                            <li>Daoxu Chen, Nanjing University, China</li>
                            <li>Jianmin Wang, Tsinghua University, China</li>
                            <li>Xuandong Li, Nanjing University, China</li>
                        </ul>
                        <h3>General Co-Chairs</h3>
                        <ul>
                            <li>Zhi Jin, Peking University, China</li>
                            <li>Xuandong Li, Nanjing University, China</li>
                            <li>Guanglai Gao, Inner Mongolia University, China</li>
                        </ul>
                        <h3>Program Committee</h3>
                        <h4>Co-Chairs</h4>
                        <ul>
                            <li>Jun Pang, University of Luxembourg, Luxembourg</li>
                            <li>Lei Bu, Nanjing University, China</li>
                            <li>Ge Li, Peking University, China</li>
                        </ul>
                        <h4>Members</h4>
                        <ul>
                            <li>Chunyang Chen, Monash University, Australia</li>
                            <li>Liqian Chen, National University of Defense Technology, China</li>
                            <li>Taolue Chen, University of London, UK</li>
                            <li>Yuting Chen, Shanghai Jiao Tong University, China</li>
                            <li>Zhenbang Chen, National University of Defense Technology, China</li>
                            <li>Yang Feng, Nanjing University, China</li>
                            <li>Cuiyun Gao, Nanyang Technological University, Singapore</li>
                            <li>Fuyuki Ishikawa, National Institute of Informatics, Japan</li>
                            <li>He Jiang, Dalian University of Technology, China</li>
                            <li>Lingxiao Jiang, Singapore Management University, Singapore</li>
                            <li>Yanyan Jiang, Nanjing University, China</li>
                            <li>Yu Jiang, Tsinghua University, China</li>
                            <li>Hui Liu, Beijing Institute of Technology, China</li>
                            <li>Yang Liu, Nanyang Technological University, Singapore</li>
                            <li>David Lo, Singapore Management University, Singapore</li>
                            <li>Lei Ma, University of Alberta, Canada</li>
                            <li>Hausi A. Muller, University of Victoria, Canada</li>
                            <li>Yu Pei, HK Polytechnic University, China</li>
                            <li>Xin Peng, Fudan University, China</li>
                            <li>Jun Sun, Singapore Management University, Singapore</li>
                            <li>Kenji Tei, Waseda University, Japan</li>
                            <li>Jingyi Wang, Zhejiang University, China</li>
                            <li>Anton Wijs, Eindhoven University of Technology, Netherands</li>
                            <li>Xin Xia, Huawei, China</li>
                            <li>Tao Xie, Peking University, China</li>
                            <li>Xiaofei Xie, Nanyang Technological University, Singapore</li>
                            <li>Jifeng Xuan, Wuhan University, China</li>
                            <li>Jie Zhang, University College London, UK</li>
                            <li>Chenyi Zhang, Jinan University, China</li>
                            <li>Yuxia Zhang, Beijing Institute of Technology, China</li>
                            <li>Haiyan Zhao, Peking University, China</li>
                            <li>Junfeng Zhao, Inner Mongolia University, China</li>
                            <li>Minghui Zhou, Peking University, China</li>
                            <li>Zhiqiang Zuo, Nanjing University, China</li>
                        </ul>
                        <h3>Local Arrangement Co-Chairs</h3>
                        <ul>
                            <li>Jiantao Zhou, Inner Mongolia University, China</li>
                            <li>Junfeng Zhao, Inner Mongolia University, China</li>
                        </ul>
                        <h3>Web Chair</h3>
                        <ul>
                            <li>Yongqiang Gao, Inner Mongolia University, China</li>
                        </ul>
                        <h3>Financial Chair</h3>
                        <ul>
                            <li>Yongqiang Gao, Inner Mongolia University, China</li>
                        </ul>
                        <h3>Proceedings Chair</h3>
                        <ul>
                            <li>Yang Feng, Nanjing University, China</li>
                        </ul>
                        <h3>Publicity and Social Media Chair</h3>
                        <ul>
                            <li>Yanyan Jiang, Nanjing University, China</li>
                            <li>Shaopeng Wang, Inner Mongolia University, China</li>
                        </ul>
                    </div>
                    <div id="d7" class="d pages">
                        <h3>Conference Venue Information</h3>
                        <p><img alt="" src="images/酒店概况.jpg" /></p>
                        <p>The conference venue will be The Inner Mongolia Xincheng Hotel. Xincheng Hotel, situated in
                            the center of Hohhot, the capital city of Inner Mongolia Autonomous Region, covers an area
                            of 121,000 square meters. Here you can find a peaceful and beautiful environment and gardens
                            carefully planted in the midst of modern buildings. On this wonderful and rich field, it is
                            equipped with modern facilities such as lodging, food and beverage, entertainment, SPA,
                            exhibition and club as well as other devices. In addition, there are more than 600 beds,
                            over 20 meeting rooms, 45 restaurants, bars and banquet halls, an 18-lane bowling alley,
                            video games and other kinds of entertainment and recreation facilities, which create a
                            wonderful and pleasant place for people. Xincheng Hotel has also been equipped with an
                            intranet and internet system, enabling many business transactions to be conveniently
                            conducted online, such as reservations, receptions, reception, registration, enquiries,
                            monitoring, fire control, checking in and checking out, which will assist out guests in
                            utilizing fast, safe, and high-quality service.</p>
                        <div style="color: rgb(0, 183, 255);">
                            <p>
                                Address: 40. Hulun S. Rd. Hohhot, Inner Mongolia, China
                                <br>
                                Tel: +86-471-6660888
                                <br>
                                Fax: +86-471-6931141
                                <br>
                            </p>
                        </div>
                        <div style="text-align: justify;">
                            <div style="width: 100%;text-align: center;">
                                <img src="./images/map2.png" alt="" style="width: 90%;">
                            </div>
                        </div>
                    </div>
                    <div id="d8" class="d pages">
                        <h3>Accommodation</h3>
                        <p>TBD</p>
                        <!--                                <p style="font-size: 20px;color: #000;">Hotel Recommendation:</p>
<p style="font-size: 3px;"></p>
<table style="width: 100%;font-size: 1.5em;">
    <tr style="background-color: darkslateblue;">
        <td class="td" style="color: white;">Number</td>
        <td class="td" style="color: white;">Hotel name</td>
        <td class="td" style="color: white;">Star</td>
        <td class="td" style="color: white;">Reference price (including breakfast)</td>
        <td class="td" style="color: white;">Instructions</td>
    </tr>
    <tr>
        <td class="td2">1</td>
        <td class="td2">Xincheng Hotel</td>
        <td class="td2">Single room (five-star)</td>
        <td class="td2">600¥/night</td>
        <td class="td2">There is a shortage of houses, so you need to book in advance as
            soon as possible</td>
    </tr>
    <tr>
        <td class="td2">2</td>
        <td class="td2">Inner Mongolia Hotel</td>
        <td class="td2">Standard room / Single room (five-star)</td>
        <td class="td2">730¥/night</td>
        <td class="td2">Near Xincheng Hotel</td>
    </tr>
    <tr>
        <td class="td2">3</td>
        <td class="td2">Hailiang Hotel</td>
        <td class="td2">Standard room / Single room (five-star)</td>
        <td class="td2">350¥/night</td>
        <td class="td2">Convenient distance from commercial street</td>
    </tr>
    <tr>
        <td class="td2">4</td>
        <td class="td2">Shuimu Nianhua Sunshine Hotel</td>
        <td class="td2">Standard room / Single room (four-star)</td>
        <td class="td2">410¥/night</td>
        <td class="td2">Near Xincheng Hotel</td>
    </tr>
</table>
<div style="text-align: left; font-size: 1.5em;margin-left:3%">
    If you need assistance in booking a hotel, please send a text message to 13734712952
    or email to gaoyongqiang@imu.edu.cn , information content: Name + company + mobile
    phone number + number of rooms + check-in time + departure time.<br>
</div>-->
                    </div>
                    <div id="d9" class="d pages">
                        <h3>Travel Information and Food</h3>
                        <h3>The Hohhot City</h3>
                        <p><img id="p1" src="./images/呼和浩特.jpg" width="100%"></p>
                        <ul>
                            <li>Inner Mongolia exhibition hall</li>
                            <li>Dazhao Wuliang Temple</li>
                            <li>Qingcheng Park</li>
                        </ul>
                        <p><img src="./images/展览馆.jpeg" alt="" style="width: 100%;"></p>
                        <p><img src="./images/无量寺.jpeg" alt="" style="width: 100%;"></p>
                        <p><img src="./images/青城公园.jpeg" alt="" style="width: 100%;"></p>
                        <h3>Hohhot Gourmet</h3>
                        <ul>
                            <li>Roasted Whole Lamb</li>
                            <li>Boiled sheep on ice</li>
                            <li>Barbecue</li>
                        </ul>
                        <p><img src="./images/烤全羊.png" alt="" style="width: 100%;"></p>
                        <p><img src="./images/冰煮羊.jpeg" alt="" style="width: 100%;"></p>
                        <p><img src="./images/烧烤.jpeg" alt="" style="width: 100%;"></p>
                    </div>
                    <div id="d10" class="d pages">
                        <h3>Special Section/Issue on Intelligent Software Engineering</h3>
                        <p>Software systems have been playing important roles in business, scientific research, and our
                            everyday lives. It
                            is
                            critical to improve both software productivity and quality, which are major challenges to
                            software engineering
                            researchers and practitioners. As developers work on a project, they leave behind many
                            digital artifacts. These
                            digital trails can provide insights into how software is developed and provide a rich source
                            of information to
                            help
                            improve development practices. For instance, GitHub hosts more than 57M repositories, and is
                            currently used by
                            more
                            than 20M developers. As another example, Stack Overflow has more than 3.9M registered users,
                            8.8M questions, and
                            41M
                            comments. The productivity of software developers and testers can be improved using
                            information from these
                            repositories.</p>
                        <p>In recent years, software engineering is benefiting from the rise of Artificial Intelligence
                            (AI) techniques
                            (e.g.,
                            machine learning and deep learning). These techniques have shown a great success in
                            addressing various software
                            engineering problems (e.g., code generation, code recommendation, and bug fix and repair).
                            Many papers have
                            applied
                            AI techniques to discover knowledge or build intelligent tools from software artifacts
                            (e.g., specifications,
                            source
                            code, documentations, execution logs, code commits and bug reports) to improve software
                            quality and development
                            process. Mining high quality knowledge from software artifacts is critical to building AI
                            tools. Thus, mining
                            software repositories to learn predictive and quality models is an important part in
                            intelligent software
                            engineering. For this special issue, we seek the full potential of AI on improving both
                            software productivity
                            and
                            quality.</p>

                        <p>We invite the submission of high-quality papers describing original and significant work in
                            all areas of
                            intelligent
                            software engineering including (but not limited to): 1) Methodological and technical
                            foundations of intelligent
                            software engineering, 2) Approaches and techniques for knowledge discovery in various
                            software artefacts, and 3)
                            Applications of AI techniques to facilitate specialized tasks in software engineering.
                            Topics of interest
                            include
                            but are not limited to:</p>

                        <b>A. Intelligent software engineering techniques</b>
                        <ul>
                            <li>AI models and techniques for software engineering</li>
                            <li>Robust and highly scalable algorithms for mining ultra-large-scale software systems</li>
                            <li>Explainable and actionable AI models</li>
                            <li>Visualizing AI models</li>
                        </ul>
                        <br>
                        <b>B. Knowledge discovery in software artefacts</b>
                        <ul>
                            <li>Mining software specifications</li>
                            <li>Mining source code/code commits</li>
                            <li>Mining execution traces and logs</li>
                            <li>Mining bug and crash reports</li>
                            <li>Mining Q&A and social data</li>
                        </ul>
                        <br>
                        <b>C. Intelligent software engineering in specialized tasks</b>
                        <ul>
                            <li>AI techniques for software development and reuse</li>
                            <li>AI techniques for software maintenance and evolution</li>
                            <li>AI techniques for software testing and debugging</li>
                            <li>AI techniques for open-source ecosystem best practices</li>
                            <li>AI techniques for better requirement reasoning and refinement</li>
                            <li>AI techniques for program repair</li>
                        </ul>

                        <h3>Submission</h3>
                        <p>To speed up the review process, and to encourage people to join Internetware 2022
                            (https://internetware2022.github.io/) conference (in Hohhot, China), we setup two rounds of
                            reviews: a
                            Internetware
                            conference round, and a journal round.</p>
                        <p>In the Internetware conference round, authors are encouraged to submit their manuscripts to
                            the Easychair
                            submission
                            site https://easychair.org/my/conference?conf=internetware2022, You should choose
                            “Intelligent Software
                            Engineering
                            Track” in Easychair. The submissions must have not been previously published or considered
                            for publication
                            elsewhere. Each submission must not exceed 10 pages for all text, figures, tables, and
                            references. All
                            submissions
                            must be in English and in PDF format. Please use the ACM Master article template, as can be
                            obtained from the
                            ACM
                            Proceedings Template pages. Each submission will receive at least three high-quality reviews
                            from our PCs. Each
                            accepted submission must be accompanied by a registration of at least one author and
                            presented at Internetware
                            2022.</p>
                        <p>And in the journal round, only the selected best papers will be invited to submit their
                            revisions to the
                            Automated
                            Software Engineering journal. You should choose SI:TBD. The authors should carefully address
                            the comments from
                            the
                            Internetware conference reviewers and prepare a response letter. And these papers will be
                            reviewed by the same
                            three
                            reviewers. Note that only the selected best papers from the Internetware conference round
                            will get invited for
                            possible journal publication.</p>

                        <h3>Important Dates</h3>
                        <b>Internetware conference round</b>
                        <ul>
                            <li>Submission Deadline: February 20, 2022</li>
                            <li>Notification of Acceptance: April 17, 2022</li>
                        </ul>
                        <br>
                        <b>Journal round</b>
                        <ul>
                            <li>Submission Deadline: June 30, 2022</li>
                            <li>First Round Review Due: September 30, 2022</li>
                            <li>Revision Due: December 31, 2022</li>
                            <li>Final Decisions: March 31, 2023</li>
                        </ul>

                        <h3>Guest Editors</h3>
                        <ul>
                            <li>Xing Hu, Zhejiang University, China (xinghu@zju.edu.cn)</li>
                            <li>Xin Xia, Huawei, China (xin.xia@acm.org)</li>
                            <li>David Lo, Singapore Management University, Singapore (davidlo@smu.edu.sg )</li>
                            <li>Ge Li, Peking University, China (lige@pku.edu.cn)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="./Home.js"></script>
</body>

</html>

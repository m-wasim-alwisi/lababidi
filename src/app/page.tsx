"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const books = [
  {
    id: 1,
    title: "ابنتي التي لم تأتِ ولنْ",
    subtitle: "رواية",
    coverGradient: "from-primary-dark via-primary to-primary-light",
    coverImage: "/images/books/book1.png",
    coverPlaceholder: "/images/books/book1.png",
    summary: `"كيف تُدفَن الذاكرة، واليد لا تزال تكتب؟ وكيف تمسك بك يد لم تَعُد تنتمي إلى هذا العالم؟\n\nفي عالم يتشابك فيه الحُلم بالحقيقة، والوهم بالحياة، يصحو "أيهم" على واقع لا يُشبهه، وحياة تصرّ الذاكرة على تزوير ملامحها.\nالساعة تُعيد نفسها عند الثانية بعد منتصف الليل، والوجع ذاته ينهض من رماده ليعيد تشكيل الأيام...\nوطفلةٌ لا يعرف إن كانت ابنة الحلم أم ابنة الفقد.\n لا تزوره كذكرى، بل كظلٍّ حيّ， يتمشى معه， يهمس له， ويأبى أن يغيب.\nأوراق تُقلّب زوايا العقل المنسيّة， وتسير بك في متاهة من الأسى， والندم， والشفقة المُجرّدة， لتسألك بصمتٍ دامغ:\n"هل فقدناهم حقاً... أم نحن من ضِعْنا معهم؟"`,
    themes: ["فقدان", "ذاكرة", "حلم", "واقع", "ندم"],
  },
  {
    id: 2,
    title: "شفَقُ الخريف",
    subtitle: "رواية",
    coverGradient: "from-primary-dark via-primary to-primary-light",
    coverImage: "/images/books/book2.jpg",
    coverPlaceholder: "/images/books/book2.jpg",
    summary: `"لم يكن الحب في الحسبان... ولم يكن الفراق كذلك."\n\nفي مدينة يكتنفها صقيع ديسمبر، تبدأ حكايتهما عندما التقى شمس بـ سما، وكأن القدر قرر أن يجمع بين الضوء و السماء في لحظة خاطفة، ليغير مسار حياته. "لم يكن لقاءً عابرًا... لم يكن مجرد لحظة تنطفئ مع الوقت. كان نوعًا من اللقاءات التي تقتحمك كعاصفة، وتتركك متسائلًا: كيف عشت قبله؟"\nكانت هذه القصة لتكون عادية، لولا أن القدر لم يكن سخيًا بما يكفي. فكما هو الحال في أيام الخريف التي تختلط فيها ألوان السماء مع شفق الشمس الأخير، تأتي اللحظات التي تجعل من العادي لحظات حاسمة.\nلكن شمس لم يكن يعرف أن منعطفًا غامضًا سيقف بينهما، ليجعله ممزقًا بين البقاء والرحيل.\nبين رسائلها التي لا تتوقف وذكرياتهما التي تلاحقه، يجد شمس نفسه عالقًا في صراع داخلي: هل يبقى إلى جانبها رغم ما يحمله من غموض؟ أم يهرب ليحميها من مصير مجهول؟\nوفي كل مرة يحاول أن يمضي بعيدًا، تعيده تلك الليالي السوداء التي شهدت ما بينهما لتواجهه وتذكره:\n"سيجرفك النهر كيفما كان اختبارك له..."\nهل ينجو شمس من القدر قبل فوات الأوان؟ أم أن بعض الحكايات تُكتب فقط لتترك أثرًا قبل أن تنتهي؟`,
    themes: ["حب", "فراق", "قدر", "صراع", "غموض"],
  },
  {
    id: 3,
    title: "أنا الخطأ.. لا شيطاني",
    subtitle: "رواية",
    coverGradient: "from-primary-dark via-primary to-accent",
    coverImage: "/images/books/book3.png",
    coverPlaceholder: "/images/books/book3.png",
    summary: `لماذا لا تتركني وشأني إذًا؟ سأل آدم بنبرةٍ حادّة.\nفأجابه الشيطان بهدوءٍ ثقيل:\n"لأنك تحتاجني، لولا خوفي فيك لما صلّيت، ولولا خطيئتي فيك لما بحثتَ عن النقاء، أنا لستُ شيطانك وحدك، أنا صوتُ كلّ إنسانٍ حين يختلي بنفسه."\nلا تبحث عن الشيطان هنا، فهو لم يكتب هذه القصة.\nالذي كتبها… يشبهك أكثر مما تظن.\nجميعنا نسمع أصواتًا في الداخل... \nأحدها يقول: "أنا الشيطان"، والآخر يهمس: "أنا فقط… أنت."\nهذه الرواية ليست عن الخلاص، بل شهادةُ ميلادٍ لذنبٍ أُقترف.\nليست عن الجنون، ولا عن الإغواء، بل عن تلك اللحظة التي أدرك فيها الإنسان\nأنه هو من يفتح الأبواب، وأن وسوسته أقوى من أيّ شيطان.\nاقرأها إن كنت تجرؤ على النظر إلى داخلك، فربما تكتشف أن آدم لم يكن وحده المخطئ… وربما تدرك في النهاية... أنك كنتَه منذ البداية.\nفلا تلومنّ إلا نفسك.`,
    themes: ["ذات", "شيطان", "خطأ", "وعي", "مسؤولية"],
  },
];

export default function Home() {
  const [openBook, setOpenBook] = useState<number | null>(null);

  const handleOpenSummary = (bookId: number) => {
    setOpenBook(bookId);
    document.body.style.overflow = "hidden";
  };

  const handleCloseSummary = () => {
    setOpenBook(null);
    document.body.style.overflow = "unset";
  };

  const selectedBook = books.find((b) => b.id === openBook);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">ك</span>
            </div>
            <span className="font-semibold text-xl text-primary-dark">معرض الأعمال</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#books" className="text-primary/80 hover:text-primary transition-colors font-medium">
              الروايات
            </Link>
            <Link href="#about" className="text-primary/80 hover:text-primary transition-colors font-medium">
              عن الكاتب
            </Link>
            <Link href="#contact" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:from-primary/90 hover:to-accent/90 transition-all">
              تواصل
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-accent/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_70%)] opacity-30" />
          <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              كاتب روايات عربية
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-slide-up">
              <span className="gradient-text">قصص</span>{" "}
              <span className="text-primary-dark">تبقى</span>
              <br />
              <span className="text-primary/60">في الذاكرة</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary/70 max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              روايات تلامس الروح، تطرح أسئلة الوجود، وتترك أثراً لا يُمحى في قلب القارئ
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Link
                href="#books"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg hover:from-primary/90 hover:to-accent/90 transition-all shadow-lg shadow-primary/25"
              >
                استكشف الروايات
              </Link>
              <Link
                href="#about"
                className="px-8 py-4 rounded-full border-2 border-primary/20 text-primary font-semibold text-lg hover:bg-primary/5 transition-all"
              >
                تعرّف على الكاتب
              </Link>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        <section id="books" className="py-24 md:py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
                <span className="gradient-text">أعمالي</span> الأدبية
              </h2>
              <p className="text-lg text-primary/60 max-w-2xl mx-auto">
                كل رواية رحلة مختلفة، وكل قصة نافذة لعالم خاص
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {books.map((book, index) => (
                <article
                  key={book.id}
                  className="book-card group relative bg-white rounded-2xl overflow-hidden border border-primary/10 animate-slide-up flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Image
                      src={book.coverImage}
                      alt={`${book.title} - غلاف الرواية`}
                      fill
                      loading="eager"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {book.subtitle}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary-dark mb-3 leading-tight group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {book.themes.map((theme) => (
                        <span key={theme} className="px-2.5 py-1 rounded-full bg-primary/5 text-primary/70 text-xs font-medium border border-primary/10">
                          {theme}
                        </span>
                      ))}
                    </div>
                    <div className="flex-1">
                      <p className="text-primary/100 leading-relaxed text-lg line-clamp-4">
                        {book.summary.split("\n\n")[0]}
                      </p>
                    </div>
                    <button
                      onClick={() => handleOpenSummary(book.id)}
                      className="mt-4 w-full px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold hover:from-primary/90 hover:to-accent/90 transition-all shadow-lg shadow-primary/25"
                    >
                      قراءة الملخص الكامل
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 md:py-32 px-6 bg-gradient-to-b from-primary/5 via-white to-accent/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary via-primary-light to-accent p-1">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/90 backdrop-blur">
                    <Image
                      src="/images/books/author.JPG"
                      alt="صورة الكاتب"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-accent to-primary opacity-20 blur-3xl" />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
                  <span className="gradient-text">عن</span> الكاتب
                </h2>
                <div className="prose prose-lg max-w-none text-primary/100 leading-relaxed space-y-4">
                  <p>
                    كاتب  و روائي سوري يسعى لاستكشاف أعماق النفس البشرية من خلال كلماته.
                    تؤمن كتاباته بأن كل قصة تحمل في طياتها حقيقة تنتظر من يكتشفها，
                    وأن الرواية ليست مجرد حكاية تُروى， بل مرآة تعكس ما في داخلنا.
                  </p>
                  <p>
                    تتميز أعماله بالعمق الفلسفي، واللغة الشعرية، والقدرة على نسج عوالم
                    تختلط فيها الحدود بين الواقع والخيال، بين الذاكرة والحلم، بين ما
                    كان وما كان يمكن أن يكون.
                  </p>
                  <p>
                    ثلاثة أعمال روائية حتى الآن، كل منها يفتح باباً مختلفاً لأسئلة
                    الوجود، الحب، الفقد، والهوية. كتاباته دعوة للتأمل، ورحلة إلى
                    داخل الذات.
                  </p>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-6">
                  {[
                    { value: "3", label: "روايات منشورة" },
                    { value: "∞", label: "قصص في القلب" },
                    { value: "1", label: "صوت واحد" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 rounded-xl bg-white border border-primary/10">
                      <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-sm text-primary/100 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
                اقتباسات <span className="gradient-text">مُلهمة</span>
              </h2>
              <p className="text-lg text-primary/60 max-w-2xl mx-auto">
                كلمات مختارة من الروايات الثلاث
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: '"هل فقدناهم حقاً... أم نحن من ضِعْنا معهم؟"',
                  book: "ابنتي التي لم تأتِ ولنْ",
                }, {
                  quote: '"بعض الأحلام ليست رؤی، بل رسائل، صورٌ، تتسلل من هشيم الذاكرة، وتتنكر في هيئة نوم، لتهمس بما عجز الواقع عن قوله.',
                  book: "ابنتي التي لم تأتِ ولنْ",
                },
                {
                  quote: '"سيجرفك النهر كيفما كان اختبارك له..."',
                  book: "شفَقُ الخريف",
                },
                {
                  quote: '"إذا علمت أن كل شيء قد قُتل.. فعليك أن تدرك بأن الطريق الذي ستسلكه هو ذاته الطريق الذي قُتلت فيه."',
                  book: "شفَقُ الخريف",
                },
                {
                  quote: '"أنا لستُ شيطانك وحدك، أنا صوتُ كلّ إنسانٍ حين يختلي بنفسه."',
                  book: "أنا الخطأ.. لا شيطاني",
                },
                {
                  quote: '"الخطيئة ليست جريمةً تُرتكب بيديك، بل فكرةٌ صغيرة تزرعها في رأسك، ثم تسقها بالخوف، حتی تنمو على شكل حياةٍ لا تعرف كيف تعيشها."',
                  book: "أنا الخطأ.. لا شيطاني",
                },
              ].map((item, index) => (
                <blockquote
                  key={index}
                  className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-all"
                >
                  <div className="absolute top-6 right-6 text-primary/10 text-6xl font-bold">«</div>
                  <p className="relative text-xl md:text-2xl font-medium text-primary-dark leading-relaxed mb-6">
                    {item.quote}
                  </p>
                  <footer className="text-primary/100 text-lg font-medium">
                    — {item.book}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 md:py-32 px-6 bg-gradient-to-b from-primary/5 via-white to-accent/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
              تواصل <span className="gradient-text">معي</span>
            </h2>
            <p className="text-xl text-primary/60 mb-10 max-w-xl mx-auto">
              أرحب بآرائكم، أسئلتكم، ومقترحاتكم. كل رسالة تُقرأ باهتمام.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:adamlababidy531@gmail.com"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg hover:from-primary/90 hover:to-accent/90 transition-all shadow-lg shadow-primary/25 w-full sm:w-auto"
              >
                راسلني عبر البريد
              </a>
              <a
                href="https://www.instagram.com/ahmed_lababidy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl border-2 border-primary/20 text-primary font-semibold text-lg hover:bg-primary/5 transition-all w-full sm:w-auto"
              >
                تابعني على انستغرام
              </a>
            </div>
          </div>
        </section>
      </main>

      {selectedBook && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={handleCloseSummary}
          role="dialog"
          aria-modal="true"
          aria-labelledby="summary-title"
        >
          <div
            className="relative max-w-[calc(100%-2rem)] max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-2xl animate-slide-up flex"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full md:w-1/2 min-h-[420px] hidden md:flex items-center justify-center overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary/10 to-accent/10">
              <Image
                src={selectedBook.coverImage}
                alt={`${selectedBook.title} - غلاف الرواية`}
                fill
                className="object-contain p-4"
                priority
                loading="eager"
                sizes="450px"
                onError={(e) => {
                  e.currentTarget.src = selectedBook.coverPlaceholder;
                }}
              />
            </div>
            <div className="relative w-full md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[90vh] flex-1 min-w-0">
              <button
                onClick={handleCloseSummary}
                className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="إغلاق الملخص"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                  {selectedBook.subtitle}
                </span>
                <h2 id="summary-title" className="text-2xl md:text-3xl font-bold text-primary-dark leading-tight mb-2">
                  {selectedBook.title}
                </h2>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedBook.themes.map((theme) => (
                  <span key={theme} className="px-3 py-1 rounded-full bg-primary/5 text-primary/70 text-sm font-medium border border-primary/10">
                    {theme}
                  </span>
                ))}
              </div>
              <div className="prose prose-lg max-w-none text-primary/100 leading-relaxed whitespace-pre-line">
                {selectedBook.summary}
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-primary-dark text-white/60 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">ك</span>
            </div>
            <span className="font-semibold text-xl">معرض الأعمال</span>
          </div>
           <div className="flex items-center justify-center gap-6">
            <a href="https://t.me/WasimAlwisi" className="hover:text-white transition-colors">
              made with ❤️ by <span className="font-semibold">Wasim Alwisi</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
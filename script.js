const works = [
  { index: 1, title: "漱口水sku", file: "work-ascii/work-01.jpg", family: "电商", type: "线上设计" },
  { index: 2, title: "漱口水详情页", file: "work-ascii/work-02.png", family: "电商", type: "线上设计" },
  { index: 3, title: "降解精华包装", file: "work-ascii/work-03.jpg", family: "小红书", type: "线上设计" },
  { index: 4, title: "立冬海报", file: "work-ascii/work-04.jpg", family: "小红书", type: "线上设计" },
  { index: 5, title: "电话修改", file: "work-ascii/work-05.jpg", family: "社群", type: "线上设计" },
  { index: 6, title: "号码修改", file: "work-ascii/work-06.jpg", family: "社群", type: "线上设计" },
  { index: 7, title: "二级页", file: "work-ascii/work-07.jpg", family: "电商", type: "线上设计" },
  { index: 8, title: "新品战报", file: "work-ascii/work-08.jpg", family: "电商", type: "线上设计" },
  { index: 9, title: "护肤品详情页", file: "work-ascii/work-09.png", family: "电商", type: "线上设计" },
  { index: 10, title: "体验馆招募", file: "work-ascii/work-10.jpeg", family: "小红书", type: "线上设计" },
  { index: 11, title: "电动牙刷", file: "work-ascii/work-11.jpg", family: "小红书", type: "线上设计" },
  { index: 12, title: "漱口水", file: "work-ascii/work-12.jpg", family: "小红书", type: "线上设计" },
  { index: 13, title: "口味图", file: "work-ascii/work-13.jpg", family: "电商", type: "线上设计" },
  { index: 14, title: "牙刷对比", file: "work-ascii/work-14.jpg", family: "小红书", type: "线上设计" },
  { index: 15, title: "正当红", file: "work-ascii/work-15.jpg", family: "小红书", type: "线上设计" },
  { index: 16, title: "活动海报", file: "work-ascii/work-16.png", family: "新媒体", type: "线上设计" },
  { index: 17, title: "节气海报", file: "work-ascii/work-17.png", family: "AI", type: "线上设计" },
  { index: 18, title: "元旦海报", file: "work-ascii/work-18.jpg", family: "品牌", type: "线上设计" },
  { index: 19, title: "红绿牙刷", file: "work-ascii/work-19.jpg", family: "小红书", type: "线上设计" },
  { index: 20, title: "牙刷套盒", file: "work-ascii/work-20.jpg", family: "小红书", type: "线上设计" },
  { index: 21, title: "水墨镜面海报", file: "work-ascii/work-21.png", family: "AI", type: "线上设计" },
  { index: 22, title: "结业证书", file: "work-ascii/work-22.jpg", family: "品牌", type: "线下设计" },
  { index: 23, title: "授权书", file: "work-ascii/work-23.jpg", family: "品牌", type: "线下设计" },
  { index: 24, title: "产品手册", file: "work-ascii/work-24.png", family: "产品", type: "线下设计" },
  { index: 25, title: "宣传手册", file: "work-ascii/work-25.png", family: "品牌", type: "线下设计" },
  { index: 26, title: "三折页", file: "work-ascii/work-26.png", family: "产品", type: "线下设计" },
  { index: 27, title: "三折页", file: "work-ascii/work-27.png", family: "产品", type: "线下设计" },
  { index: 28, title: "液体敷料", file: "work-ascii/work-28.png", family: "三折页", type: "线下设计" },
  { index: 29, title: "蓝宝书", file: "work-ascii/work-29.png", family: "论文册", type: "线下设计" },
  { index: 30, title: "手表", file: "work-ascii/work-30.png", family: "建模渲染", type: "C4D" },
  { index: 31, title: "静物", file: "work-ascii/work-31.png", family: "建模渲染", type: "C4D" },
  { index: 32, title: "外星人", file: "work-ascii/work-32.png", family: "建模渲染", type: "C4D" },
  { index: 33, title: "兔灯", file: "work-ascii/work-33.png", family: "建模渲染", type: "C4D" },
  { index: 34, title: "蛋糕", file: "work-ascii/work-34.png", family: "建模渲染", type: "C4D" },
  { index: 35, title: "店铺", file: "work-ascii/work-35.png", family: "建模渲染", type: "C4D" },
  { index: 36, title: "飞机", file: "work-ascii/work-36.png", family: "建模渲染", type: "C4D" },
  { index: 37, title: "紫砂壶", file: "work-ascii/work-37.png", family: "建模渲染", type: "C4D" },
  { index: 38, title: "木椅", file: "work-ascii/work-38.png", family: "建模渲染", type: "C4D" },
  { index: 39, title: "金属字", file: "work-ascii/work-39.png", family: "建模渲染", type: "C4D" },
];

const nav = document.querySelector("[data-work-nav]");
const dateEl = document.querySelector("[data-date]");
const previewStage = document.querySelector("[data-stage]");
const imageRail = document.querySelector("[data-image-rail]");
const workFamily = document.querySelector("[data-work-family]");
const workType = document.querySelector("[data-work-type]");
const workIndex = document.querySelector("[data-work-index]");
const drawer = document.querySelector("[data-drawer]");
const drawerImage = document.querySelector("[data-drawer-image]");
const drawerTitle = document.querySelector("[data-drawer-title]");
const drawerKicker = document.querySelector("[data-drawer-kicker]");
const closeDrawer = document.querySelector("[data-close-drawer]");

let activeIndex = 0;
let targetY = 0;
let currentY = 0;
let itemCenters = [];
let navCenters = [];
let navY = 0;
let navTargetY = 0;
let isDragging = false;
let dragStartY = 0;
let dragStartTarget = 0;
let rafId = null;

function assetPath(work) {
  return `assets/${work.file}`;
}

function padIndex(value) {
  return String(value).padStart(2, "0");
}

function renderDate() {
  const now = new Date();
  const formatted = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(now);

  dateEl.textContent = formatted.replace(" ", " ");
  dateEl.dateTime = now.toISOString();
}

function renderNav() {
  nav.innerHTML = `
    <div class="work-nav-track" data-work-nav-track>
      ${works
        .map(
          (work, itemIndex) => `
            <button class="work-link" type="button" data-work="${itemIndex}">
              ${work.title}
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderRail() {
  imageRail.innerHTML = works
    .map(
      (work, itemIndex) => `
        <button class="rail-card" type="button" data-rail-card="${itemIndex}" aria-label="查看 ${work.title}">
          <img src="${assetPath(work)}" alt="${work.title}" draggable="false" />
        </button>
      `,
    )
    .join("");
}

function measureRail() {
  const railRect = imageRail.getBoundingClientRect();
  itemCenters = [...document.querySelectorAll("[data-rail-card]")].map((card) => {
    const rect = card.getBoundingClientRect();
    return rect.top - railRect.top + rect.height / 2;
  });
  measureNav();
  moveToIndex(activeIndex, false);
}

function measureNav() {
  const navTrack = document.querySelector("[data-work-nav-track]");
  if (!navTrack) return;
  const trackRect = navTrack.getBoundingClientRect();
  navCenters = [...document.querySelectorAll("[data-work]")].map((button) => {
    const rect = button.getBoundingClientRect();
    return rect.top - trackRect.top + rect.height / 2;
  });
  moveNavToIndex(activeIndex, false);
}

function setActive(nextIndex, shouldFocus = false, shouldMove = true) {
  activeIndex = nextIndex;
  const work = works[activeIndex];

  document.querySelectorAll("[data-work]").forEach((button) => {
    const itemIndex = Number(button.dataset.work);
    const isActive = itemIndex === activeIndex;
    const distance = Math.abs(itemIndex - activeIndex);
    button.classList.toggle("is-active", isActive);
    button.classList.toggle("is-near", distance === 1);
    button.classList.toggle("is-far", distance > 2);
    if (isActive && shouldFocus) button.focus();
  });

  document.querySelectorAll("[data-rail-card]").forEach((card) => {
    const itemIndex = Number(card.dataset.railCard);
    const distance = Math.abs(itemIndex - activeIndex);
    card.classList.toggle("is-active", itemIndex === activeIndex);
    card.classList.toggle("is-far", distance > 1);
  });

  workFamily.textContent = work.family;
  workType.textContent = work.type;
  workIndex.textContent = padIndex(work.index);
  moveNavToIndex(activeIndex);

  if (shouldMove) moveToIndex(activeIndex);
}

function moveToIndex(index, animate = true) {
  if (!itemCenters.length) return;
  const stageCenter = previewStage.getBoundingClientRect().height / 2;
  targetY = stageCenter - itemCenters[index];
  if (!animate) currentY = targetY;
  requestTick();
}

function clampTarget(value) {
  if (!itemCenters.length) return value;
  const stageCenter = previewStage.getBoundingClientRect().height / 2;
  const first = stageCenter - itemCenters[0];
  const last = stageCenter - itemCenters[itemCenters.length - 1];
  return Math.max(last, Math.min(first, value));
}

function moveNavToIndex(index, animate = true) {
  if (!navCenters.length) return;
  const navCenter = nav.getBoundingClientRect().height / 2;
  navTargetY = navCenter - navCenters[index];
  if (!animate) navY = navTargetY;
  requestTick();
}

function updateActiveFromPosition() {
  if (!itemCenters.length) return;
  const stageCenter = previewStage.getBoundingClientRect().height / 2;
  let nextIndex = activeIndex;
  let nearest = Infinity;

  itemCenters.forEach((center, index) => {
    const distance = Math.abs(center + currentY - stageCenter);
    if (distance < nearest) {
      nearest = distance;
      nextIndex = index;
    }
  });

  if (nextIndex !== activeIndex) setActive(nextIndex, false, false);
}

function requestTick() {
  if (rafId) return;
  rafId = requestAnimationFrame(tick);
}

function tick() {
  rafId = null;
  currentY += (targetY - currentY) * 0.18;
  navY += (navTargetY - navY) * 0.2;
  if (Math.abs(targetY - currentY) < 0.1) currentY = targetY;
  if (Math.abs(navTargetY - navY) < 0.1) navY = navTargetY;
  imageRail.style.transform = `translate3d(0, ${currentY}px, 0)`;
  const navTrack = document.querySelector("[data-work-nav-track]");
  if (navTrack) navTrack.style.transform = `translate3d(0, ${navY}px, 0)`;
  updateActiveFromPosition();
  if (currentY !== targetY || navY !== navTargetY) requestTick();
}

function openActiveWork() {
  const work = works[activeIndex];
  drawerImage.src = assetPath(work);
  drawerImage.alt = `${work.title} 完整作品`;
  drawerTitle.textContent = work.title;
  drawerKicker.textContent = `${work.type} / ${padIndex(work.index)}`;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeActiveWork() {
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

renderDate();
renderNav();
renderRail();
requestAnimationFrame(() => {
  measureRail();
  setActive(0, false, false);
});
setInterval(renderDate, 30 * 1000);

nav.addEventListener("mouseover", (event) => {
  const button = event.target.closest("[data-work]");
  if (!button) return;
  setActive(Number(button.dataset.work));
});

nav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-work]");
  if (!button) return;
  setActive(Number(button.dataset.work));
});

imageRail.addEventListener("click", (event) => {
  const card = event.target.closest("[data-rail-card]");
  if (!card) return;
  const nextIndex = Number(card.dataset.railCard);
  if (nextIndex === activeIndex) openActiveWork();
  else setActive(nextIndex);
});

previewStage.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    targetY = clampTarget(targetY - event.deltaY * 0.9);
    requestTick();
  },
  { passive: false },
);

previewStage.addEventListener("pointerdown", (event) => {
  isDragging = true;
  dragStartY = event.clientY;
  dragStartTarget = targetY;
  previewStage.setPointerCapture(event.pointerId);
});

previewStage.addEventListener("pointermove", (event) => {
  if (!isDragging) return;
  targetY = clampTarget(dragStartTarget + event.clientY - dragStartY);
  requestTick();
});

previewStage.addEventListener("pointerup", (event) => {
  isDragging = false;
  previewStage.releasePointerCapture(event.pointerId);
  moveToIndex(activeIndex);
});

previewStage.addEventListener("pointercancel", () => {
  isDragging = false;
  moveToIndex(activeIndex);
});

closeDrawer.addEventListener("click", closeActiveWork);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeActiveWork();
  if (event.key === "ArrowDown") setActive((activeIndex + 1) % works.length, true);
  if (event.key === "ArrowUp") setActive((activeIndex - 1 + works.length) % works.length, true);
});

window.addEventListener("resize", measureRail);

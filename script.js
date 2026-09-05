const WORKER_URL = "https://nico-tag-map-worker.hitoiki4105.workers.dev";


// ---------- 多言語対応 ----------
const translations = {
  ja: {
    pageTitle: "タグ探索マップ",
    toolTagline: "ニコニコ動画関連タグ検索ツール(非公式)",
    subtitle: "タグは、動画の森で動画と出会うための道標のようです。",
    contactLine: "問い合わせなどはこちらから",
    legendNode: "ノード（点・丸）： 各単語を表します。円が大きいほど出現頻度が高いことを意味します。",
    legendEdge: "エッジ（線）： 一緒に使われる単語同士を繋ぎます。線が太いほど同時に出現する割合（共起性）が強いことを示します。",
    legendColor: "カラーリング（色分け）： 関連性の高い単語同士を同じグループ（クラスター）として色分けし、主要なトピックを区切りやすくします。",
    legendClickInfo: "・円（ノード）をクリックすると、そのタグを新しい中心として再表示します（開始年・終了年の指定は維持されます）。",
    legendHoverInfo: "・円にマウスを載せると、対応するタグ名が表示されます。",
    firstTagSectionTitle: "中心タグの指定",
    firstTagLabel: "・共起ネットワークの中心タグになります。",
    firstTagFreqInfo: "・関連タグは出現頻度で順位づけされます。",
    firstTagInfo: "・指定されたタグと同時に使われている関連タグを取得します。",
    periodDescription: "検索対象動画投稿期間（オプション）",
    fromYearLabel: "開始年:",
    toYearLabel: "終了年:",
    searchBtn: "タグ探索マップを展開する",
    mapStatusTitle: "タグ探索マップ展開状況",
    displayModeTitle: "関連タグの表示範囲",
    displayModeDescription2: "・取得された関連タグは出現回数によって順位づけます。",
    displayModeDescription4: "・共起ネットワーク図に表示する関連タグの順位の範囲を指定できます。",
    rangeNoteText: "・選択範囲を変えると、新しい道が見えてくるかもしれません。",
    displayUpdatedMessage: "関連タグの表示範囲を変更して表示します。",
    displayReflectedMessage: (centerTag) => `関連タグの表示範囲の変更が反映されました。中心タグは【${centerTag}】のままです。`,
    periodUpdatedMessage: "検索対象動画投稿期間を変更、再表示しています。動画から情報を再取得しているため、時間がかかります。お待ちください。",
    periodReflectedMessage: (centerTag) => `検索対象動画投稿期間の変更が反映されました。中心タグは【${centerTag}】のままです。`,
    backToTopLabel: "共起ネットワーク図に移動する",
    topLabel: "上位",
    rangeFromLabel: "位 から",
    rangeToLabel: "位 まで",
    applyDisplayBtn: "マップの表示を更新する",
    allTagsSummary: "取得された関連タグ",
    tagHistoryTitle: "探索したタグの記録",
    randomTagsTitle: "・関連タグ一覧からランダムに10件表示します。",
    reshuffleRandomTagsBtn: "別の10件を表示",
    allTagsNewWindowNote: "・中心タグの関連タグの全てを新規タブで表示します。",
    openAllTagsWindowBtn: "全関連タグをリストで表示",
    popupWindowTitle: (centerTag) => `【${centerTag}】の全関連タグ一覧`,
    popupReturnNote: "・タグ名をクリックすると、このページを閉じて、自動的に前のページに戻ります。",
    popupNoBookmarkNote: "・このページはブックマークできません。更新したら消えます。",
    popupBlockedMessage: "ポップアップがブロックされました。ブラウザの設定でこのサイトのポップアップを許可してください。",
    firstTagExplanationToggle: "中心タグの説明",
    displayModeExplanationToggle: "関連タグ表示範囲の説明",
    legendExplanationToggle: "共起ネットワーク図の説明",
    colRank: "順位", colName: "タグ名", colFreq: "出現回数",
    languageLabel: "言語:",
    loading: "取得中…（数秒〜十数秒かかります）",
    graphLoadingRecenter: "中心のタグを変更、再表示しています。動画から情報を再取得しているため、時間がかかります。お待ちください。",
    enterTag: "タグを入力してください",
    errorPrefix: "エラー: ",
    networkErrorPrefix: "通信エラーが発生しました: ",
    networkErrorHelp: "・総件数が多いタグ（数万〜数十万件）だと、ブラウザ側やCloudflare側のタイムアウトに引っかかって接続が切れることがあります。<br>・Wi-Fiの瞬断やスマホの電波状況など通信環境の一時的な問題の可能性があります。<br>・*.workers.devドメインへのリクエストをブロックしている可能性があります。<br>・ニコニコ側APIの一時的な不調の可能性があります。",
    clearPeriodBtn: "期間を指定しない",
    retryButton: "もう一度マップの展開を試みる",
    reducedLoadMessage: "負荷を減らすため、取得件数が最大3800件に変更されました。",
    noVideosFoundMessage: "指定された期間で、指定されたタグを含む動画を見つけられませんでした。",
    searchResultTitle: "共起ネットワーク図",
    statusTemplate: (total, got, isFullCoverage, centerTag) => isFullCoverage
      ? `指定されたタグ【${centerTag}】を含む動画全${total.toLocaleString()}件を全て取得しました。`
      : `指定されたタグ【${centerTag}】を含む動画が4,800件を超えていたため、動画全${total.toLocaleString()}件から ${got.toLocaleString()}件の動画をランダムで取得しました。`,
  },
  en: {
    pageTitle: "Forest of Videos, Tag Explorer Map",
    toolTagline: "Niconico Related-Tag Search Tool (unofficial)",
    subtitle: "Tags are like signposts for meeting videos in the video forest.",
    contactLine: "For inquiries, contact:",
    legendNode: "Node (circle): Each word. A bigger circle means higher frequency.",
    legendEdge: "Edge (line): Connects words used together. A thicker line means stronger co-occurrence.",
    legendColor: "Coloring: Closely related words are grouped into clusters by color, making main topics easier to see.",
    legendClickInfo: "・Click a node to re-center the graph on that tag (start/end year stays as set).",
    legendHoverInfo: "・Hover over a circle to see its tag name.",
    firstTagSectionTitle: "Center tag",
    firstTagLabel: "・This will be the center tag of the co-occurrence network.",
    firstTagInfo: "・Retrieves related tags used alongside the given tag.",
    firstTagFreqInfo: "・Related tags are ranked by frequency.",
    periodDescription: "Posting period of videos to search (optional)",
    fromYearLabel: "From year:",
    toYearLabel: "To year:",
    searchBtn: "Expand the tag explore map",
    mapStatusTitle: "Map Expansion Status",
    displayModeTitle: "Range of Related Tags",
    displayModeDescription2: "・Retrieved related tags are ranked by their number of occurrences.",
    displayModeDescription4: "・You can specify the rank range of related tags to display in the network graph.",
    rangeNoteText: "・Changing the selected range might reveal a new path.",
    displayUpdatedMessage: "The display range of related tags has been changed.",
    displayReflectedMessage: (centerTag) => `The display range change has been applied. The center tag is still【${centerTag}】.`,
    periodUpdatedMessage: "Changing the search period and re-rendering… This re-fetches video data, so it may take a while. Please wait.",
    periodReflectedMessage: (centerTag) => `The search period change has been applied. The center tag is still【${centerTag}】.`,
    backToTopLabel: "Go to the co-occurrence network",
    topLabel: "Top",
    rangeFromLabel: "th to",
    rangeToLabel: "th",
    applyDisplayBtn: "Update the map display",
    allTagsSummary: "Retrieved related tags",
    tagHistoryTitle: "Search history",
    randomTagsTitle: "・Shows 10 random tags from the related tag list.",
    reshuffleRandomTagsBtn: "Show another 10",
    allTagsNewWindowNote: "・Shows all related tags for the center tag in a new tab.",
    openAllTagsWindowBtn: "Show all related tags as a list",
    popupWindowTitle: (centerTag) => `All related tags for【${centerTag}】`,
    popupReturnNote: "・Click a tag name to close this page and automatically return to the previous page.",
    popupNoBookmarkNote: "・This page can't be bookmarked. It disappears on refresh.",
    popupBlockedMessage: "The popup was blocked. Please allow popups for this site in your browser settings.",
    firstTagExplanationToggle: "About the center tag",
    displayModeExplanationToggle: "About the display range",
    legendExplanationToggle: "About the network diagram",
    colRank: "Rank", colName: "Tag", colFreq: "Count",
    languageLabel: "Language:",
    loading: "Loading… (may take several seconds)",
    graphLoadingRecenter: "Changing center tag and re-rendering… This re-fetches video data, so it may take a while. Please wait.",
    enterTag: "Please enter a tag",
    errorPrefix: "Error: ",
    networkErrorPrefix: "Network error: ",
    networkErrorHelp: "・For tags with a very high total count (tens or hundreds of thousands), the connection can time out on the browser or Cloudflare side.<br>・A temporary network issue (Wi-Fi drop, weak mobile signal) may be the cause.<br>・An ad blocker or browser extension may be blocking requests to *.workers.dev.<br>・Niconico's API may be temporarily unavailable.",
    clearPeriodBtn: "Clear period",
    retryButton: "Retry building the map",
    reducedLoadMessage: "To reduce load, the retrieval limit has been lowered to 3,800 videos.",
    noVideosFoundMessage: "No videos with the given tag were found in the specified period.",
    searchResultTitle: "Co-occurrence network",
    statusTemplate: (total, got, isFullCoverage, centerTag) => isFullCoverage
      ? `Retrieved all ${total.toLocaleString()} videos with the given tag【${centerTag}】.`
      : `Videos with the given tag【${centerTag}】exceeded 4,800, so ${got.toLocaleString()} of ${total.toLocaleString()} videos were randomly sampled.`,
  },
  zh: {
    pageTitle: "视频之森，标签探索地图",
    toolTagline: "Niconico视频关联标签搜索工具(非官方)",
    subtitle: "标签就像在视频之森中与视频相遇的路标。",
    contactLine: "如有疑问请联系：",
    legendNode: "节点（圆点）：代表每个词，圆越大表示出现频率越高。",
    legendEdge: "连线：连接一起使用的词，线越粗表示共现程度越强。",
    legendColor: "颜色：将关联度高的词分为同一组（聚类）并用颜色区分，便于识别主要话题。",
    legendClickInfo: "・点击节点可将该标签设为新的中心并重新显示（开始年、结束年设置保持不变）。",
    legendHoverInfo: "・将鼠标悬停在圆圈上可显示对应的标签名。",
    firstTagSectionTitle: "指定中心标签",
    firstTagLabel: "・将成为共现网络的中心标签。",
    firstTagFreqInfo: "・相关标签按出现频率排序。",
    firstTagInfo: "・获取与该标签同时使用的相关标签。",
    periodDescription: "检索对象视频的投稿期间（可选）",
    fromYearLabel: "起始年:",
    toYearLabel: "结束年:",
    searchBtn: "展开标签探索地图",
    mapStatusTitle: "标签地图展开状态",
    displayModeTitle: "相关标签的显示范围",
    displayModeDescription2: "・获取到的相关标签会按出现次数进行排名。",
    displayModeDescription4: "・可以指定要在共现网络图中显示的相关标签的排名范围。",
    rangeNoteText: "・改变选择范围，也许会发现新的道路。",
    displayUpdatedMessage: "已变更相关标签的显示范围。",
    displayReflectedMessage: (centerTag) => `相关标签显示范围的更改已生效。中心标签仍为【${centerTag}】。`,
    periodUpdatedMessage: "正在变更检索期间并重新显示……由于需要重新获取视频信息，可能需要一些时间，请稍候。",
    periodReflectedMessage: (centerTag) => `检索期间的更改已生效。中心标签仍为【${centerTag}】。`,
    backToTopLabel: "前往共现网络图",
    topLabel: "前",
    rangeFromLabel: "位 到",
    rangeToLabel: "位",
    applyDisplayBtn: "更新地图显示",
    allTagsSummary: "获取到的相关标签",
    tagHistoryTitle: "搜索过的标签记录",
    randomTagsTitle: "・从相关标签列表中随机显示10个。",
    reshuffleRandomTagsBtn: "换一批10个",
    allTagsNewWindowNote: "・在新标签页中显示中心标签的全部相关标签。",
    openAllTagsWindowBtn: "以列表显示全部相关标签",
    popupWindowTitle: (centerTag) => `【${centerTag}】的全部相关标签列表`,
    popupReturnNote: "・点击标签名将关闭此页面，并自动返回上一页。",
    popupNoBookmarkNote: "・此页面无法收藏。刷新后将消失。",
    popupBlockedMessage: "弹出窗口被阻止。请在浏览器设置中允许此网站的弹出窗口。",
    firstTagExplanationToggle: "中心标签说明",
    displayModeExplanationToggle: "相关标签显示范围说明",
    legendExplanationToggle: "共现网络图说明",
    colRank: "排名", colName: "标签名", colFreq: "出现次数",
    languageLabel: "语言:",
    loading: "正在获取…（可能需要数秒至十几秒）",
    graphLoadingRecenter: "正在切换中心标签并重新显示……由于需要重新获取视频信息，可能需要一些时间，请稍候。",
    enterTag: "请输入标签",
    errorPrefix: "错误: ",
    networkErrorPrefix: "网络错误: ",
    networkErrorHelp: "・如果标签的视频总数很多（数万至数十万），浏览器或Cloudflare一侧可能会超时导致连接中断。<br>・也可能是Wi-Fi瞬断或手机信号不佳等临时网络问题。<br>・广告拦截器或浏览器扩展可能阻止了对*.workers.dev域名的请求。<br>・也可能是Niconico一侧API暂时出现故障。",
    clearPeriodBtn: "不指定期间",
    retryButton: "再次尝试生成地图",
    reducedLoadMessage: "为了减轻负载，获取上限已更改为最多3800个视频。",
    noVideosFoundMessage: "在指定期间内未找到含有该标签的视频。",
    searchResultTitle: "共现网络图",
    statusTemplate: (total, got, isFullCoverage, centerTag) => isFullCoverage
      ? `已获取含有该标签【${centerTag}】的全部${total.toLocaleString()}个视频。`
      : `含有该标签【${centerTag}】的视频超过4,800个，因此从全${total.toLocaleString()}个视频中随机获取了${got.toLocaleString()}个。`,
  },
  ko: {
    pageTitle: "영상의 숲, 태그 탐색 지도",
    toolTagline: "니코니코 동영상 관련 태그 검색 도구(비공식)",
    subtitle: "태그는 영상의 숲에서 영상을 만나기 위한 이정표와 같습니다.",
    contactLine: "문의는 이쪽으로:",
    legendNode: "노드(원): 각 단어를 나타냅니다. 원이 클수록 출현 빈도가 높습니다.",
    legendEdge: "엣지(선): 함께 사용된 단어를 연결합니다. 선이 굵을수록 동시출현 비율이 높습니다.",
    legendColor: "색상: 관련성이 높은 단어끼리 같은 그룹(클러스터)으로 색을 구분해 주요 주제를 구분하기 쉽게 합니다.",
    legendClickInfo: "・노드(원)를 클릭하면 해당 태그를 새로운 중심으로 다시 표시합니다(시작년・종료년 설정은 유지됩니다).",
    legendHoverInfo: "・원 위에 마우스를 올리면 해당 태그명이 표시됩니다.",
    firstTagSectionTitle: "중심 태그 지정",
    firstTagLabel: "・공기 네트워크의 중심 태그가 됩니다.",
    firstTagFreqInfo: "・관련 태그는 출현 빈도로 순위가 매겨집니다.",
    firstTagInfo: "・지정한 태그와 함께 사용되는 관련 태그를 가져옵니다.",
    periodDescription: "검색 대상 동영상 게시 기간（선택）",
    fromYearLabel: "시작년:",
    toYearLabel: "종료년:",
    searchBtn: "태그 탐색 지도 펼치기",
    mapStatusTitle: "태그 탐색 지도 전개 상태",
    displayModeTitle: "관련 태그의 표시 범위",
    displayModeDescription2: "・가져온 관련 태그는 출현 횟수에 따라 순위가 매겨집니다.",
    displayModeDescription4: "・공기 네트워크 그림에 표시할 관련 태그의 순위 범위를 지정할 수 있습니다.",
    rangeNoteText: "・선택 범위를 바꾸면 새로운 길이 보일지도 모릅니다.",
    displayUpdatedMessage: "관련 태그의 표시 범위를 변경하여 표시합니다.",
    displayReflectedMessage: (centerTag) => `관련 태그 표시 범위 변경이 반영되었습니다. 중심 태그는 계속【${centerTag}】입니다.`,
    periodUpdatedMessage: "검색 대상 게시 기간을 변경하고 다시 표시하는 중입니다. 동영상 정보를 다시 가져오는 중이라 시간이 걸립니다. 잠시만 기다려 주세요.",
    periodReflectedMessage: (centerTag) => `검색 대상 게시 기간 변경이 반영되었습니다. 중심 태그는 계속【${centerTag}】입니다.`,
    backToTopLabel: "공기 네트워크 그림으로 이동",
    topLabel: "상위",
    rangeFromLabel: "위 부터",
    rangeToLabel: "위 까지",
    applyDisplayBtn: "지도 표시 업데이트",
    allTagsSummary: "가져온 관련 태그",
    tagHistoryTitle: "탐색한 태그 기록",
    randomTagsTitle: "・관련 태그 목록에서 무작위로 10개를 표시합니다.",
    reshuffleRandomTagsBtn: "다른 10개 보기",
    allTagsNewWindowNote: "・중심 태그의 관련 태그 전체를 새 탭에 표시합니다.",
    openAllTagsWindowBtn: "전체 관련 태그를 목록으로 표시",
    popupWindowTitle: (centerTag) => `【${centerTag}】의 전체 관련 태그 목록`,
    popupReturnNote: "・태그명을 클릭하면 이 페이지를 닫고 자동으로 이전 페이지로 돌아갑니다.",
    popupNoBookmarkNote: "・이 페이지는 북마크할 수 없습니다. 새로고침하면 사라집니다.",
    popupBlockedMessage: "팝업이 차단되었습니다. 브라우저 설정에서 이 사이트의 팝업을 허용해 주세요.",
    firstTagExplanationToggle: "중심 태그 설명",
    displayModeExplanationToggle: "관련 태그 표시 범위 설명",
    legendExplanationToggle: "공기 네트워크 그림 설명",
    colRank: "순위", colName: "태그명", colFreq: "출현 횟수",
    languageLabel: "언어:",
    loading: "가져오는 중…(수 초~십수 초 소요)",
    graphLoadingRecenter: "중심 태그를 변경하고 다시 표시하는 중입니다. 동영상 정보를 다시 가져오는 중이라 시간이 걸립니다. 잠시만 기다려 주세요.",
    enterTag: "태그를 입력하세요",
    errorPrefix: "오류: ",
    networkErrorPrefix: "통신 오류: ",
    networkErrorHelp: "・태그의 전체 동영상 수가 매우 많으면(수만~수십만 건) 브라우저나 Cloudflare 쪽에서 타임아웃이 발생해 연결이 끊길 수 있습니다.<br>・Wi-Fi 순간 끊김이나 모바일 전파 상태 등 일시적인 통신 환경 문제일 수 있습니다.<br>・광고 차단기나 브라우저 확장 프로그램이 *.workers.dev 도메인 요청을 차단하고 있을 수 있습니다.<br>・니코니코 측 API의 일시적인 장애일 수 있습니다.",
    clearPeriodBtn: "기간 지정 안 함",
    retryButton: "지도 전개 다시 시도",
    reducedLoadMessage: "부하를 줄이기 위해 가져오는 건수가 최대 3800건으로 변경되었습니다.",
    noVideosFoundMessage: "지정한 기간에 해당 태그를 포함한 동영상을 찾을 수 없었습니다.",
    searchResultTitle: "공기 네트워크 그림",
    statusTemplate: (total, got, isFullCoverage, centerTag) => isFullCoverage
      ? `지정된 태그【${centerTag}】를 포함한 전체 ${total.toLocaleString()}개 동영상을 모두 가져왔습니다.`
      : `지정된 태그【${centerTag}】를 포함한 동영상이 4,800개를 초과하여, 전체 ${total.toLocaleString()}개 중 ${got.toLocaleString()}개를 무작위로 가져왔습니다.`,
  },
};

let currentLang = "ja";

function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.getElementById("htmlRoot").lang = lang;
  document.getElementById("pageTitleTag").textContent = t.pageTitle;
  document.getElementById("pageTitle").textContent = t.pageTitle;
  document.getElementById("toolTagline").textContent = t.toolTagline;
  document.getElementById("subtitle").textContent = t.subtitle;
  document.getElementById("contactLine").innerHTML =
    t.contactLine + ' <a href="https://x.com/hitoiki327882" target="_blank" rel="noopener">https://x.com/hitoiki327882</a>';
  document.getElementById("legendNode").textContent = t.legendNode;
  document.getElementById("legendEdge").textContent = t.legendEdge;
  document.getElementById("legendColor").textContent = t.legendColor;
  document.getElementById("legendClickInfo").textContent = t.legendClickInfo;
  document.getElementById("legendHoverInfo").textContent = t.legendHoverInfo;
  document.getElementById("firstTagSectionTitle").textContent = t.firstTagSectionTitle;
  document.getElementById("firstTagLabel").textContent = t.firstTagLabel;
  document.getElementById("firstTagFreqInfo").textContent = t.firstTagFreqInfo;
  document.getElementById("firstTagInfo").textContent = t.firstTagInfo;
  document.getElementById("periodDescription").textContent = t.periodDescription;
  document.getElementById("fromYearLabel").textContent = t.fromYearLabel;
  document.getElementById("toYearLabel").textContent = t.toYearLabel;
  document.getElementById("searchBtn").textContent = t.searchBtn;
  document.getElementById("mapStatusTitle").textContent = t.mapStatusTitle;
  document.getElementById("displayModeTitle").textContent = t.displayModeTitle;
  document.getElementById("displayModeDescription2").textContent = t.displayModeDescription2;
  document.getElementById("displayModeDescription4").textContent = t.displayModeDescription4;
  document.getElementById("rangeNoteText").textContent = t.rangeNoteText;
  document.getElementById("topLabel").textContent = t.topLabel;
  document.getElementById("rangeFromLabel").textContent = t.rangeFromLabel;
  document.getElementById("rangeToLabel").textContent = t.rangeToLabel;
  document.getElementById("applyDisplayBtn").textContent = t.applyDisplayBtn;
  document.getElementById("clearPeriodBtn").textContent = t.clearPeriodBtn;
  document.getElementById("backToTopBtn").setAttribute("aria-label", t.backToTopLabel);
  document.getElementById("backToTopBtn").setAttribute("title", t.backToTopLabel);
  document.getElementById("allTagsSummary").textContent = t.allTagsSummary;
  document.getElementById("tagHistoryTitle").textContent = t.tagHistoryTitle;
  document.getElementById("randomTagsTitle").textContent = t.randomTagsTitle;
  document.getElementById("reshuffleRandomTagsBtn").textContent = t.reshuffleRandomTagsBtn;
  document.getElementById("allTagsNewWindowNote").textContent = t.allTagsNewWindowNote;
  document.getElementById("openAllTagsWindowBtn").textContent = t.openAllTagsWindowBtn;
  document.getElementById("firstTagExplanationToggle").textContent = t.firstTagExplanationToggle;
  document.getElementById("displayModeExplanationToggle").textContent = t.displayModeExplanationToggle;
  document.getElementById("legendExplanationToggle").textContent = t.legendExplanationToggle;
  document.getElementById("colRank").textContent = t.colRank;
  document.getElementById("colName").textContent = t.colName;
  document.getElementById("colFreq").textContent = t.colFreq;
  document.getElementById("languageLabel").textContent = t.languageLabel;
  document.getElementById("searchResultTitle").textContent = t.searchResultTitle;

  if (lastData) {
    document.getElementById("status").textContent =
      t.statusTemplate(lastData.totalCount, lastData.videoCount, lastData.isFullCoverage, lastData.centerTag);
  }

  syncSearchBtnWidth();
  syncS11InnerWrapWidth();
  syncDisplayModeBoxHeight();
  syncS11Height();
}

function syncSearchBtnWidth() {
  const refEl = document.getElementById("periodSection");
  const btnEl = document.getElementById("searchBtn");
  const inputEl = document.getElementById("tagInput");
  if (!refEl) return;
  requestAnimationFrame(() => {
    const width = refEl.getBoundingClientRect().width;
    if (width > 0) {
      if (btnEl) {
        btnEl.style.width = width + "px";
        btnEl.style.boxSizing = "border-box";
      }
      if (inputEl) {
        inputEl.style.width = width + "px";
        inputEl.style.boxSizing = "border-box";
      }
    }
  });
}
window.addEventListener("resize", syncSearchBtnWidth);

function syncS11InnerWrapWidth() {
  const subtitleEl = document.getElementById("subtitle");
  const wrapEl = document.getElementById("s11InnerWrap");
  if (!subtitleEl || !wrapEl) return;
  requestAnimationFrame(() => {
    // subtitle本来の折り返し無し幅を測るため、一時的にnowrap化して計測する
    const prevWhiteSpace = subtitleEl.style.whiteSpace;
    const prevDisplay = subtitleEl.style.display;
    subtitleEl.style.whiteSpace = "nowrap";
    subtitleEl.style.display = "inline-block";
    const naturalWidth = subtitleEl.getBoundingClientRect().width;
    subtitleEl.style.whiteSpace = prevWhiteSpace;
    subtitleEl.style.display = prevDisplay;

    if (naturalWidth > 0) {
      const parentWidth = wrapEl.parentElement.getBoundingClientRect().width;
      const finalWidth = Math.min(naturalWidth, parentWidth);
      wrapEl.style.width = finalWidth + "px";
      wrapEl.style.boxSizing = "border-box";
    }
  });
}
window.addEventListener("resize", syncS11InnerWrapWidth);

function syncDisplayModeBoxHeight() {
  const firstTagSectionEl = document.getElementById("firstTagSection");
  const displayModeBoxEl = document.getElementById("displayModeBox");
  if (!firstTagSectionEl || !displayModeBoxEl) return;
  requestAnimationFrame(() => {
    // 一旦高さ指定を外して本来の高さを測る（狭い画面で1カラムになった場合の誤同期を防ぐ）
    displayModeBoxEl.style.height = "auto";
    const isSideBySide = firstTagSectionEl.getBoundingClientRect().top ===
      displayModeBoxEl.getBoundingClientRect().top;
    if (!isSideBySide) return; // 1カラム表示時は高さを揃えない
    const targetHeight = firstTagSectionEl.getBoundingClientRect().height;
    if (targetHeight > 0) {
      displayModeBoxEl.style.height = targetHeight + "px";
      displayModeBoxEl.style.boxSizing = "border-box";
    }
  });
}
window.addEventListener("resize", syncDisplayModeBoxHeight);

function syncS11Height() {
  const s11El = document.getElementById("s11");
  const mapImageSectionEl = document.getElementById("mapImageSection");
  if (!s11El || !mapImageSectionEl) return;
  requestAnimationFrame(() => {
    s11El.style.height = "auto";
    const isSideBySide = s11El.getBoundingClientRect().top ===
      mapImageSectionEl.closest("#s12").getBoundingClientRect().top;
    if (!isSideBySide) return; // 1カラム表示時は高さを揃えない
    const targetHeight = mapImageSectionEl.getBoundingClientRect().height;
    if (targetHeight > 0) {
      s11El.style.height = targetHeight + "px";
      s11El.style.boxSizing = "border-box";
    }
  });
}
window.addEventListener("resize", syncS11Height);
window.addEventListener("load", () => {
  syncSearchBtnWidth();
  syncS11InnerWrapWidth();
  syncDisplayModeBoxHeight();
  syncS11Height();
});

document.getElementById("langSelect").addEventListener("change", (e) => {
  applyLanguage(e.target.value);
});

// ---------- 開始年・終了年の連動 ----------
const fromYearInput = document.getElementById("fromYear");
const toYearInput = document.getElementById("toYear");

function syncToYearMin() {
  const fromVal = parseInt(fromYearInput.value, 10);
  const minForTo = isNaN(fromVal) ? 2006 : fromVal;
  toYearInput.setAttribute("min", String(minForTo));
}
fromYearInput.addEventListener("input", syncToYearMin);
syncToYearMin();

// ---------- 表示範囲（位から/位まで）の連動 ----------
const rangeFromInput = document.getElementById("rangeFrom");
const rangeToInput = document.getElementById("rangeTo");
rangeFromInput.addEventListener("input", () => {
  const from = parseInt(rangeFromInput.value, 10) || 0;
  rangeToInput.value = from + 10;
});

// ---------- 検索・グラフ描画 ----------
let lastData = null;
let currentSvg = null, currentZoomBehavior = null;

document.getElementById("searchBtn").addEventListener("click", () => {
  document.getElementById("searchResultTitle").scrollIntoView({ behavior: "smooth", block: "start" });
  search();
});
document.getElementById("clearPeriodBtn").addEventListener("click", () => {
  fromYearInput.value = "";
  toYearInput.value = "";
  syncToYearMin();
});
document.getElementById("applyDisplayBtn").addEventListener("click", () => {
  const t = translations[currentLang];
  document.getElementById("statusErrorHelp").innerHTML = "";
  document.getElementById("statusExtra").innerHTML = "";
  document.getElementById("searchResultTitle").scrollIntoView({ behavior: "smooth", block: "start" });
  document.getElementById("status").textContent = t.displayUpdatedMessage;
  renderSelection();
  const centerTagForMessage = lastData ? lastData.centerTag : "";
  setTimeout(() => {
    document.getElementById("status").textContent = t.displayReflectedMessage(centerTagForMessage);
  }, 600);
});

let currentLoadingGeneration = 0;
function showGraphOverlay(isRecenter) {
  currentLoadingGeneration++;
  const t = translations[currentLang];
  const overlay = document.getElementById("graphLoadingOverlay");
  overlay.textContent = isRecenter ? t.graphLoadingRecenter : t.loading;
  overlay.style.display = "block";
  showFairyAnim();
  return currentLoadingGeneration;
}
function hideGraphOverlay(forGeneration) {
  // forGeneration が指定されている場合、それが「現在進行中の読み込み」と一致する時だけ非表示にする。
  // 一致しない場合は、古い（すでに追い越された）検索の完了処理なので何もしない。
  // これにより、新しい検索が始まった後に古いグラフ描画の完了イベントが遅れて発火しても、
  // 新しい検索のローディング表示（妖精アニメーション含む）を誤って消してしまわないようにする。
  if (forGeneration !== undefined && forGeneration !== currentLoadingGeneration) return;
  document.getElementById("graphLoadingOverlay").style.display = "none";
  hideFairyAnim();
}

let fairyIntervalId = null;
let fairyMovesSinceFlip = 0;
let fairyNextFlipAt = 1 + Math.floor(Math.random() * 10); // 1〜10回後にランダムで反転
let fairyFlipped = false;

function randomizeFairyPosition() {
  const container = document.getElementById("fairyAnimContainer");
  const img = document.getElementById("fairyImg");
  const containerWidth = container.clientWidth || 300;
  const imgWidth = img.clientWidth || 40;
  const maxLeft = Math.max(0, containerWidth - imgWidth);
  img.style.left = Math.floor(Math.random() * maxLeft) + "px";

  // 少なくとも10回に1回は左右反転させる（何回目に反転するかはランダム）
  fairyMovesSinceFlip++;
  if (fairyMovesSinceFlip >= fairyNextFlipAt) {
    fairyFlipped = !fairyFlipped;
    img.style.transform = fairyFlipped ? "scaleX(-1)" : "scaleX(1)";
    fairyMovesSinceFlip = 0;
    fairyNextFlipAt = 1 + Math.floor(Math.random() * 10);
  }
}
function showFairyAnim() {
  const container = document.getElementById("fairyAnimContainer");
  container.style.display = "block";
  randomizeFairyPosition();
  if (fairyIntervalId) clearInterval(fairyIntervalId);
  fairyIntervalId = setInterval(randomizeFairyPosition, 1500);
}
function hideFairyAnim() {
  document.getElementById("fairyAnimContainer").style.display = "none";
  if (fairyIntervalId) {
    clearInterval(fairyIntervalId);
    fairyIntervalId = null;
  }
}

// ディスクロージャー（説明の開閉）ボタンの設定
function setupDisclosure(btnId, contentId) {
  const btn = document.getElementById(btnId);
  const content = document.getElementById(contentId);
  btn.addEventListener("click", () => {
    const isHidden = content.style.display === "none";
    content.style.display = isHidden ? "block" : "none";
    syncDisplayModeBoxHeight();
  });
}
setupDisclosure("firstTagExplanationToggle", "firstTagExplanation");
setupDisclosure("displayModeExplanationToggle", "displayModeExplanation");
setupDisclosure("legendExplanationToggle", "legend");

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

document.getElementById("openAllTagsWindowBtn").addEventListener("click", () => {
  const t = translations[currentLang];
  if (!lastData) return;

  const win = window.open("", "_blank");
  if (!win) {
    alert(t.popupBlockedMessage);
    return;
  }

  const rows = lastData.allTags
    .map((tg, i) => `<tr><td>${i + 1}</td><td><span class="tagLink" data-tag="${escapeHtml(tg.name)}">${escapeHtml(tg.name)}</span></td><td>${tg.freq}</td></tr>`)
    .join("");

  const title = t.popupWindowTitle(lastData.centerTag);

  win.document.write(`<!DOCTYPE html>
<html lang="${currentLang}">
<head>
<meta charset="UTF-8">
<title>${escapeHtml(title)}</title>
<style>
  body { font-family: sans-serif; margin: 20px; background: #eef3e5; color: #2f3b2a; }
  h1 { color: #33512b; font-size: 1.3em; margin-bottom: 4px; }
  p.note { font-size: 13px; color: #556047; margin-top: 0; }
  table { border-collapse: collapse; font-size: 13px; background: #fbfdf8; }
  td, th { border: 1px solid #d7e0c8; padding: 4px 8px; }
  th { background: #e2ead6; }
  .tagLink { color: #2e7d32; cursor: pointer; text-decoration: underline; }
  .tagLink:hover { color: #1b5e20; }
</style>
</head>
<body>
<h1>${escapeHtml(title)}</h1>
<p class="note">${escapeHtml(t.popupReturnNote)}</p>
<p class="note">${escapeHtml(t.popupNoBookmarkNote)}</p>
<table>
  <thead><tr><th>${escapeHtml(t.colRank)}</th><th>${escapeHtml(t.colName)}</th><th>${escapeHtml(t.colFreq)}</th></tr></thead>
  <tbody>${rows}</tbody>
</table>
<script>
document.addEventListener("click", function (e) {
  var el = e.target.closest(".tagLink");
  if (!el) return;
  var tagName = el.getAttribute("data-tag");
  if (window.opener && !window.opener.closed) {
    var input = window.opener.document.getElementById("tagInput");
    if (input) input.value = tagName;
    if (typeof window.opener.search === "function") {
      window.opener.search(tagName);
    }
    var resultTitle = window.opener.document.getElementById("searchResultTitle");
    if (resultTitle) resultTitle.scrollIntoView({ behavior: "smooth", block: "start" });
    window.opener.focus();
    window.close();
  } else {
    // openerが得られない場合（単独で開いた場合など）は、
    // 同名ウィンドウを開く/呼び出すことで既存タブを再利用してフォーカスする
    window.open("https://hitoiki4105.github.io/nico-tag-map/?tag=" + encodeURIComponent(tagName), "nicoTagMapWindow").focus();
  }
});
<\/script>
</body>
</html>`);
  win.document.close();
});

// 探索したタグの履歴
const tagHistory = [];
function recordTagHistory(tagName) {
  if (tagHistory.length === 0 || tagHistory[0] !== tagName) {
    tagHistory.unshift(tagName);
    renderTagHistory();
  }
}
function renderTagHistory() {
  const listEl = document.getElementById("tagHistoryList");
  listEl.innerHTML = "";
  tagHistory.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    li.classList.add("historyTagItem");
    li.addEventListener("click", () => {
      document.getElementById("tagInput").value = name;
      search(name);
      document.getElementById("searchResultTitle").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    listEl.appendChild(li);
  });
}

async function search(tagOverride, reducedRetry) {
  const t = translations[currentLang];
  const isRecenter = !!tagOverride;
  const tag = (tagOverride ?? document.getElementById("tagInput").value).trim();
  const fromYear = fromYearInput.value.trim();
  const toYear = toYearInput.value.trim();
  const statusEl = document.getElementById("status");

  if (!tag) { statusEl.textContent = t.enterTag; return; }
  document.getElementById("tagInput").value = tag;

  // 中心タグが前回と同じ（かつノードクリックによる再中心化ではない）場合は、
  // 「期間だけを変更しての再検索」とみなして専用メッセージを表示する
  const isPeriodOnlyUpdate = !isRecenter && !!lastData && lastData.centerTag === tag;

  const baseLoadingMsg = isRecenter
    ? t.graphLoadingRecenter
    : (isPeriodOnlyUpdate ? t.periodUpdatedMessage : t.loading);

  if (reducedRetry) {
    statusEl.innerHTML = `${baseLoadingMsg}<br><span class="sectionDescription">${t.reducedLoadMessage}</span>`;
  } else {
    statusEl.textContent = baseLoadingMsg;
  }
  document.getElementById("statusErrorHelp").innerHTML = "";
  document.getElementById("statusExtra").innerHTML = "";
  const myGeneration = showGraphOverlay(isRecenter);

  const url = new URL(WORKER_URL);
  url.searchParams.set("tag", tag);
  if (fromYear) url.searchParams.set("fromYear", fromYear);
  if (toYear) url.searchParams.set("toYear", toYear);
  if (reducedRetry) url.searchParams.set("maxPages", "38");

  try {
    const res = await fetch(url.toString());
    const data = await res.json();

    if (data.error) { statusEl.textContent = t.errorPrefix + data.error; hideGraphOverlay(myGeneration); return; }

    lastData = data;
    recordTagHistory(data.centerTag);

    if (data.totalCount === 0) {
      statusEl.textContent = t.noVideosFoundMessage;
    } else {
      statusEl.textContent = t.statusTemplate(data.totalCount, data.videoCount, data.isFullCoverage, data.centerTag);
    }

    if (isPeriodOnlyUpdate && data.totalCount !== 0) {
      const extra = document.createElement("p");
      extra.className = "sectionDescription";
      extra.textContent = t.periodReflectedMessage(data.centerTag);
      document.getElementById("statusExtra").appendChild(extra);
    }

    renderSelection(myGeneration);
  } catch (e) {
    statusEl.innerHTML = "";
    const errText = document.createElement("span");
    errText.textContent = t.networkErrorPrefix + e.message;
    const retryBtn = document.createElement("button");
    retryBtn.textContent = t.retryButton;
    retryBtn.className = "secondaryBtn";
    retryBtn.style.marginLeft = "8px";
    retryBtn.addEventListener("click", () => search(tagOverride, true));
    statusEl.appendChild(errText);
    statusEl.appendChild(retryBtn);
    document.getElementById("statusErrorHelp").innerHTML = `<p class="sectionDescription">${t.networkErrorHelp}</p>`;
    hideGraphOverlay(myGeneration);
  }
}

function renderSelection(generation = -1) {
  if (!lastData) return;
  const mode = document.querySelector('input[name="displayMode"]:checked').value;
  const allNodes = lastData.nodes;

  let selectedNodes;
  if (mode === "topN") {
    const n = parseInt(document.getElementById("topNSelect").value, 10);
    selectedNodes = allNodes.slice(0, n);
  } else {
    let from = parseInt(rangeFromInput.value, 10) || 0;
    let to = parseInt(rangeToInput.value, 10) || (from + 10);
    from = Math.max(0, from);
    to = Math.min(allNodes.length, Math.max(to, from));
    selectedNodes = allNodes.slice(from, to);
  }

  const selectedNames = new Set(selectedNodes.map(n => n.name));
  const selectedEdges = lastData.edges.filter(
    e => selectedNames.has(e.source) && selectedNames.has(e.target)
  );

  drawGraph(lastData.centerTag, selectedNodes, selectedEdges, generation);
  renderRandomTags();
}

// ---------- 関連タグからランダムに10件表示 ----------
function pickRandomTags(allTags, count) {
  const pool = [...allTags];
  const picked = [];
  while (pool.length > 0 && picked.length < count) {
    const idx = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(idx, 1)[0]);
  }
  return picked;
}

function renderRandomTags() {
  const listEl = document.getElementById("randomTagsList");
  if (!listEl) return;
  listEl.innerHTML = "";
  if (!lastData || !lastData.allTags || lastData.allTags.length === 0) return;

  const picked = pickRandomTags(lastData.allTags, 10);
  picked.forEach(tg => {
    const span = document.createElement("span");
    span.className = "clickableTag";
    span.textContent = tg.name;
    span.addEventListener("click", () => {
      document.getElementById("searchResultTitle").scrollIntoView({ behavior: "smooth", block: "start" });
      search(tg.name);
    });
    listEl.appendChild(span);
    listEl.appendChild(document.createTextNode(" "));
  });
}

document.getElementById("reshuffleRandomTagsBtn").addEventListener("click", () => {
  renderRandomTags();
});

// 森をイメージした色パレット
const forestPalette = [
  "#2e7d32", "#6d8f3f", "#8d6e63", "#556b2f",
  "#4e7a51", "#a1887f", "#33691e", "#7d8c4a",
  "#5d4037", "#3f6b4f", "#9e9d24", "#78866b"
];

// クラスタがはっきり分かれるよう、弱い共起(1回のみ)を除外し、
// 強い共起をより重視して重み付けし、更新順序をシャッフルして偏りを減らす
function detectClusters(nodes, coOccurEdges, iterations = 25) {
  const strongEdges = coOccurEdges.filter(e => e.weight >= 2);
  const edgesForClustering = strongEdges.length >= Math.max(3, nodes.length / 3)
    ? strongEdges
    : coOccurEdges;

  const clusters = {};
  nodes.forEach(n => clusters[n.name] = n.name);

  const neighborMap = {};
  edgesForClustering.forEach(e => {
    (neighborMap[e.source] ??= []).push({ node: e.target, weight: e.weight });
    (neighborMap[e.target] ??= []).push({ node: e.source, weight: e.weight });
  });

  for (let i = 0; i < iterations; i++) {
    const order = [...nodes].sort(() => Math.random() - 0.5);
    order.forEach(n => {
      const neighbors = neighborMap[n.name];
      if (!neighbors || neighbors.length === 0) return;
      const votes = {};
      neighbors.forEach(nb => {
        const c = clusters[nb.node];
        votes[c] = (votes[c] || 0) + nb.weight * nb.weight;
      });
      let best = clusters[n.name], bestScore = -1;
      for (const [c, score] of Object.entries(votes)) {
        if (score > bestScore) { bestScore = score; best = c; }
      }
      clusters[n.name] = best;
    });
  }
  return clusters;
}

function estimateLabelHalfWidth(name) {
  return Math.max(14, name.length * 4.2 + 8);
}

function drawGraph(centerTag, rawNodes, rawEdges, generation) {
  const svg = d3.select("#graph");
  svg.selectAll("*").remove();

  const width = 1000, height = 700;

  const maxFreq = d3.max(rawNodes, d => d.freq) || 1;
  const nodes = [
    { name: centerTag, freq: maxFreq, isCenter: true },
    ...rawNodes.filter(n => n.name !== centerTag).map(n => ({ ...n }))
  ];
  const nodeNames = new Set(nodes.map(n => n.name));

  const centerEdges = rawNodes
    .filter(n => n.name !== centerTag)
    .map(n => ({ source: centerTag, target: n.name, weight: n.freq }));

  const coOccurEdges = rawEdges.filter(e => nodeNames.has(e.source) && nodeNames.has(e.target));
  const edges = [...centerEdges, ...coOccurEdges];

  const clusters = detectClusters(nodes.filter(n => !n.isCenter), coOccurEdges);
  const clusterIds = [...new Set(Object.values(clusters))];
  const color = d3.scaleOrdinal(forestPalette).domain(clusterIds);

  const radius = d3.scaleSqrt().domain([0, maxFreq]).range([5, 34]);
  const strokeW = d3.scaleLinear()
    .domain([0, d3.max(edges, d => d.weight) || 1])
    .range([0.5, 6]);

  const labelNodes = nodes.map(n => ({
    id: "label-" + n.name,
    isLabel: true,
    owner: n,
  }));

  const container = svg.append("g").attr("class", "zoom-container");

  const zoomBehavior = d3.zoom()
    .scaleExtent([0.1, 10])
    .on("zoom", (event) => container.attr("transform", event.transform));
  svg.call(zoomBehavior);

  currentSvg = svg;
  currentZoomBehavior = zoomBehavior;

  const allSimNodes = [...nodes, ...labelNodes];

  const simulation = d3.forceSimulation(allSimNodes)
    .force("link", d3.forceLink(edges).id(d => d.name).distance(70).strength(0.2))
    .force("labelLink", d3.forceLink(labelNodes.map(l => ({ source: l.owner, target: l })))
      .distance(d => radius(d.source.freq) + 14)
      .strength(0.9))
    .force("charge", d3.forceManyBody().strength(d => d.isLabel ? -30 : -220))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide(d =>
      d.isLabel ? estimateLabelHalfWidth(d.owner.name) : radius(d.freq) + 10
    ).iterations(2));

  const link = container.append("g")
    .selectAll("line")
    .data(edges)
    .join("line")
    .attr("class", "link")
    .attr("stroke-width", d => strokeW(d.weight));

  const nodeSel = container.append("g")
    .selectAll("g")
    .data(nodes)
    .join("g")
    .attr("class", "node")
    .call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

  nodeSel.append("circle")
    .attr("r", d => radius(d.freq))
    .attr("fill", d => d.isCenter ? "#33221a" : color(clusters[d.name]))
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.5)
    .on("click", (event, d) => {
      if (d.isCenter) return;
      document.getElementById("searchResultTitle").scrollIntoView({ behavior: "smooth", block: "start" });
      search(d.name);
    });

  nodeSel.append("title").text(d => `${d.name} (${d.freq})`);

  const leaderSel = container.append("g")
    .selectAll("line")
    .data(labelNodes)
    .join("line")
    .attr("class", "leader");

  const labelSel = container.append("g")
    .selectAll("text")
    .data(labelNodes)
    .join("text")
    .attr("class", "label-text")
    .style("font-weight", d => d.owner.isCenter ? "bold" : "normal")
    .text(d => d.owner.name);

  simulation.on("tick", () => {
    link
      .attr("x1", d => d.source.x).attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x).attr("y2", d => d.target.y);
    nodeSel.attr("transform", d => `translate(${d.x},${d.y})`);
    leaderSel
      .attr("x1", d => d.owner.x).attr("y1", d => d.owner.y)
      .attr("x2", d => d.x).attr("y2", d => d.y);
    labelSel
      .attr("x", d => d.x)
      .attr("y", d => d.y)
      .attr("text-anchor", "middle")
      .attr("dy", 3);
  });

  simulation.on("end", () => {
    zoomToFit(svg, container, zoomBehavior, width, height);
    hideGraphOverlay(generation);
  });
  setTimeout(() => {
    zoomToFit(svg, container, zoomBehavior, width, height);
    hideGraphOverlay(generation);
  }, 1500);

  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x; d.fy = d.y;
  }
  function dragged(event, d) { d.fx = event.x; d.fy = event.y; }
  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null; d.fy = null;
  }
}

function zoomToFit(svg, container, zoomBehavior, width, height, padding = 0.9) {
  const bounds = container.node().getBBox();
  if (bounds.width === 0 || bounds.height === 0) return;
  const midX = bounds.x + bounds.width / 2;
  const midY = bounds.y + bounds.height / 2;
  const scale = Math.max(0.1, Math.min(10,
    padding / Math.max(bounds.width / width, bounds.height / height)
  ));
  const translate = [width / 2 - scale * midX, height / 2 - scale * midY];
  svg.transition().duration(500).call(
    zoomBehavior.transform,
    d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale)
  );
}

document.getElementById("zoomInBtn").addEventListener("click", () => {
  if (currentSvg && currentZoomBehavior) {
    currentSvg.transition().call(currentZoomBehavior.scaleBy, 1.3);
  }
});
document.getElementById("zoomOutBtn").addEventListener("click", () => {
  if (currentSvg && currentZoomBehavior) {
    currentSvg.transition().call(currentZoomBehavior.scaleBy, 1 / 1.3);
  }
});

document.getElementById("backToTopBtn").addEventListener("click", () => {
  document.getElementById("searchResultTitle").scrollIntoView({ behavior: "smooth", block: "start" });
});

applyLanguage("ja");
window.name = "nicoTagMapWindow";
{
  const initialParams = new URLSearchParams(window.location.search);
  const initialTag = initialParams.get("tag");
  if (initialTag) {
    document.getElementById("tagInput").value = initialTag;
    search(initialTag);
  } else {
    search();
  }
}

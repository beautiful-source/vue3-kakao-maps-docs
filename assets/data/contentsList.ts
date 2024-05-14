type ContentList = {
  key: string;
  menus: {
    key: string;
    title: string;
    pages: {
      key: string;
      href: string;
      title: string;
    }[];
  }[];
}[];

export const contentList: ContentList = [
  {
    key: 'components',
    menus: [
      {
        key: 'kakaoMap',
        title: 'KakaoMap',
        pages: [
          {
            key: 'map-control',
            href: '#map-control',
            title: '지도와 친해지기'
          },
          {
            key: 'basic-map',
            href: '#basic-map',
            title: '지도 생성하기'
          },
          {
            key: 'move-map',
            href: '#move-map',
            title: '지도 이동시키기'
          },
          {
            key: 'change-level',
            href: '#change-level',
            title: '지도 레벨 바꾸기'
          },
          {
            key: 'map-info',
            href: '#map-info',
            title: '지도 정보 얻어오기'
          },
          {
            key: 'disable-map-drag-move',
            href: '#disable-map-drag-move',
            title: '지도 이동 막기'
          },
          {
            key: 'enable-disable-zoom-in-out',
            href: '#enable-disable-zoom-in-out',
            title: '지도 확대 축소 막기'
          },
          {
            key: 'set-bounds',
            href: '#set-bounds',
            title: '지도 범위 재설정하기'
          },
          {
            key: 'add-map-click-event',
            href: '#add-map-click-event',
            title: '클릭 이벤트 등록하기'
          },
          {
            key: 'multiple-marker-control',
            href: '#multiple-marker-control',
            title: '여러개의 마커 제어하기'
          },
          {
            key: 'basic-polygon',
            href: '#basic-polygon',
            title: '다각형 그리고 이벤트 등록하기'
          }
        ]
      },
      {
        key: 'kakaoMapMarker',
        title: 'KakaoMapMarker',
        pages: [
          {
            key: 'map-marker-control',
            href: '#map-marker-control',
            title: '마커와 친해지기'
          },
          {
            key: 'basic-marker',
            href: '#basic-marker',
            title: '마커 생성하기'
          },
          {
            key: 'image-marker',
            href: '#image-marker',
            title: '다른 이미지 마커 생성하기'
          },
          {
            key: 'infowindow-marker-1',
            href: '#infowindow-marker-1',
            title: '인포윈도우가 있는 마커 생성하기1'
          },
          {
            key: 'infowindow-marker-2',
            href: '#infowindow-marker-2',
            title: '인포윈도우가 있는 마커 생성하기2'
          },
          {
            key: 'add-marker-click-event',
            href: '#add-marker-click-event',
            title: '마커에 클릭 이벤트 등록하기'
          },
          {
            key: 'add-marker-mouse-event',
            href: '#add-marker-mouse-event',
            title: '마커에 마우스 이벤트 등록하기'
          },
          {
            key: 'add-marker-order',
            href: '#add-marker-order',
            title: '마커에 순서 표시하기'
          },
          {
            key: 'keyword-basic',
            href: '#keyword-basic',
            title: '키워드로 장소검색하기'
          }
        ]
      },
      {
        key: 'kakaoMapInfoWindow',
        title: 'KakaoMapInfoWindow',
        pages: [
          {
            key: 'infowindow-control',
            href: '#infowindow-control',
            title: '인포윈도우와 친해지기'
          },
          {
            key: 'basic-infowindow-1',
            href: '#basic-infowindow-1',
            title: '인포윈도우 생성하기 1'
          },
          {
            key: 'basic-infowindow-2',
            href: '#basic-infowindow-2',
            title: '인포윈도우 생성하기 2'
          },
          {
            key: 'marker-With-infowindow',
            href: '#marker-With-infowindow',
            title: '마커에 인포윈도우 표시하기'
          }
        ]
      },
      {
        key: 'kakaoMapCustomOverlay',
        title: 'KakaoMapCustomOverlay',
        pages: [
          {
            key: 'custom-overlay-control',
            href: '#custom-overlay-control',
            title: '커스텀 오버레이와 친해지기'
          },
          {
            key: 'basic-custom-overlay',
            href: '#basic-custom-overlay',
            title: '커스텀 오버레이 생성하기1'
          },
          {
            key: 'basic-custom-overlay2',
            href: '#basic-custom-overlay2',
            title: '커스텀 오버레이 생성하기2'
          },
          {
            key: 'marker-custom-overlay',
            href: '#marker-custom-overlay',
            title: '커스텀 오버레이 마커 위에 표시하기'
          },
          {
            key: 'removable-custom-overlay',
            href: '#removable-custom-overlay',
            title: '닫기가 가능한 커스텀 오버레이'
          },
          {
            key: 'invisible-custom-overlay',
            href: '#invisible-custom-overlay',
            title: '보이지 않게 커스텀 오버레이 생성하기'
          }
        ]
      },
      {
        key: 'kakaoMapMarkerCluster',
        title: 'KakaoMapMarkerCluster',
        pages: [
          {
            key: 'marker-cluster-control',
            href: '#marker-cluster-control',
            title: '마커 클러스터와 친해지기'
          },
          {
            key: 'basic-marker-cluster',
            href: '#basic-marker-cluster',
            title: '마커 클러스터 생성하기'
          },
          {
            key: 'chicken-clusterer',
            href: '#chicken-clusterer',
            title: '클러스터 마커에 텍스트 표시하기'
          },
          {
            key: 'clusterer-click-event',
            href: '#clusterer-click-event',
            title: '클러스터 클릭 이벤트'
          }
        ]
      },
      {
        key: 'kakaoMapPolyline',
        title: 'KakaoMapPolyline',
        pages: [
          {
            key: 'polyline-control',
            href: '#polyline-control',
            title: '폴리라인과 친해지기'
          },
          {
            key: 'basic-polyline',
            href: '#basic-polyline',
            title: '폴리라인 생성하기'
          },
          {
            key: 'arrow-polyline',
            href: '#arrow-polyline',
            title: '폴리라인에 화살표 표시하기'
          }
        ]
      },
      {
        key: 'kakaoMapMarkerPolyline',
        title: 'KakaoMapMarkerPolyline',
        pages: [
          {
            key: 'marker-polyline-control',
            href: '#marker-polyline-control',
            title: '마커 폴리라인과 친해지기'
          },
          {
            key: 'basic-marker-polyline',
            href: '#basic-marker-polyline',
            title: '마커 폴리라인 생성하기'
          },
          {
            key: 'arrow-marker-polyline',
            href: '#arrow-marker-polyline',
            title: '마커 폴리라인에 화살표 표시하기'
          },
          {
            key: 'order-marker-polyline',
            href: '#order-marker-polyline',
            title: '마커 폴리라인에 순서 표시하기'
          },
          {
            key: 'custom-marker-polyline',
            href: '#custom-marker-polyline',
            title: '마커 폴리라인 커스텀하기'
          }
        ]
      }
    ]
  }
];

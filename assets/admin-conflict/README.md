# 관리자 주문 충돌 비교 실험

같은 주문 상세의 버전을 본 두 관리자 요청을 순서대로 실행했습니다. A는 입금을 확인하고, B는 오래된 화면에서 취소를 요청합니다.

| 조건 | A 응답 | B 응답 | 최종 상태 |
| --- | --- | --- | --- |
| 비교 실험: `checkVersion` 호출 두 곳만 제거 | 200 | 200 | `CANCELED` |
| 현재 코드 | 200 | 409 `ORDER_CONFLICT` | `IN_PROGRESS` |

두 조건 모두 Docker 내부의 Spring Boot 통합 테스트와 H2 메모리 DB로 실행했고 JUnit 1건이 통과했습니다. 왼쪽은 **실제 과거 배포본이 아닙니다.** 현재 코드에서 오래된 화면의 버전 검사만 뺀 통제 실험입니다. JPA `@Version`은 양쪽 모두 유지했습니다. 요청은 순서대로 보냈으므로 동시 요청 부하 시험으로 해석하면 안 됩니다. 로컬 MySQL 데이터는 사용하지 않았습니다.

원본 테스트: `anniversary-site/src/test/java/urluv/order/AdminApiIntegrationTests.java`의 `두_운영자가_같은_화면에서_동시에_처리하면_나중_요청은_충돌로_거절된다`.

실험 출력 요약: `before-result.txt`, `after-result.txt`.

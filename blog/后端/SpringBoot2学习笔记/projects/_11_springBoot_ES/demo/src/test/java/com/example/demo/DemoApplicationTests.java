package com.example.demo;

import java.io.IOException;

import org.apache.http.HttpHost;
import org.elasticsearch.client.RestClient;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.example.demo.dao.BookDao;
import com.example.demo.pojo.Book;

import co.elastic.clients.elasticsearch.ElasticsearchClient;
import co.elastic.clients.elasticsearch._types.ElasticsearchException;
import co.elastic.clients.elasticsearch.core.SearchResponse;
import co.elastic.clients.elasticsearch.core.search.Hit;
import co.elastic.clients.json.jackson.JacksonJsonpMapper;
import co.elastic.clients.transport.ElasticsearchTransport;
import co.elastic.clients.transport.rest_client.RestClientTransport;

@SpringBootTest
class DemoApplicationTests {
	@Autowired
	BookDao bookDao;

	@Test
	void contextLoads() {
		// bookDao.insert(new Book(1l,"aaaa","kkkk",1.0));
		Book res = bookDao.selectById(1);
		;
		System.out.println(res);
	}

	// 低级客户端测试：low level Client
	// <dependency>
	// <groupId>org.springframework.boot</groupId>
	// <artifactId>spring-boot-starter-data-elasticsearch</artifactId>
	// </dependency>
	// @Autowired
	// ElasticsearchRestTemplate elasticsearchRestTemplate;
	// @Test
	// void testLowLevelClient() {
	// System.out.println(elasticsearchRestTemplate);
	// //
	// 输出org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate@4fe4503a
	// }

	// // 高级版本（已经弃用）
	// <dependency>
	// <groupId>org.elasticsearch.client</groupId>
	// <artifactId>elasticsearch-rest-high-level-client</artifactId>
	// </dependency>
	// <dependency>
	// RestHighLevelClient restHighLevelClient;
	// @BeforeEach
	// void initClient() {
	// restHighLevelClient = new
	// RestHighLevelClient(RestClient.builder(HttpHost.create("http://172.30.64.71:9200")));
	// }
	// @Test
	// void testRestHightLievelClient() throws IOException {
	// // 已经弃用了，接口也变化了,已经无法测试通过了
	// IndexRequest req = new IndexRequest("books");
	// IndexResponse res = restHighLevelClient.index(req, RequestOptions.DEFAULT);
	// System.out.println(res);
	// }
	// @AfterEach
	// void destoryClient() throws IOException {
	// restHighLevelClient.close();
	// }

	// 最新版本的接口
	ElasticsearchClient client;

	@BeforeEach
	void initAPI() {
		// Create the low-level client
		RestClient restClient = RestClient.builder(new HttpHost("172.30.64.71", 9200)).build();
		// Create the transport with a Jackson mapper
		ElasticsearchTransport transport = new RestClientTransport(restClient, new JacksonJsonpMapper());
		// And create the API client
		client = new ElasticsearchClient(transport);
	}

	@Test
	void createID() throws ElasticsearchException, IOException {
		client.indices().create(c->c.index("books"));
	}

	// 搜索测试
	@Test
	void testSearch() throws ElasticsearchException, IOException {
		SearchResponse<Book> search = client
				.search(s -> s
						.index("book")
						.query(q -> q
								.term(t -> t
										.field("name")
										.value(v -> v
												.stringValue("bicycle")))),
						Book.class);

		for (Hit<Book> hit : search.hits().hits()) {
			// processProduct(hit.source());
			System.out.println(hit.id());
		}
	}

}

package com.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.demo.exception.BusinessException;
import com.demo.exception.SystemException;
import com.demo.pojo.Book;
import com.demo.service.BookService;

@Controller
@ResponseBody
@RequestMapping("/books")
public class BookController {
    @Autowired
    BookService bookService;

    // 请求：localhost/books
    // 方式：POST
    // 参数：{ "name":"post-tes1t", "author":"me", "description":"des"}
    // 响应：{ "code": 20001, "data": true, "msg": "Book保存成功"}
    @PostMapping
    Result add(@RequestBody Book book) {
        // 模拟业务级异常
        if (book.getName().length() == 0) {
            // 请求：localhost/books
            // 方式：POST
            // 参数：{ "name":"", "author":"me", "description":"des"}
            // 响应：{ "code": 60000, "data": null, "msg": "业务级别异常"}
            throw new BusinessException(Msg.BUSINESS_INTERNAL_ERR, Code.BUSINESS_INTERNAL_ERR);
        }
        // 模拟系统级异常
        try {
            // 请求：localhost/books
            // 方式：POST
            // 参数：{ "name":"", "author":"me", "description":"des"}
            // 响应：{ "code": 50000, "data": null, "msg": "服务器内部异常"}
            int i = 1 / book.getId();
        } catch (Exception exception) {
            throw new SystemException(Msg.SYSTEM_INTERNAL_ERR, exception, Code.SYSTEM_INTERNAL_ERR);
        }

        // 请求：localhost/books
        // 方式：POST
        // 参数：{ "id":1, "name":"123", "author":"me","description":"很长很长很长很长很长很长的描述"}
        // 响应：{ "code": 70000, "data": null, "msg": "未知异常"}

        boolean flag = bookService.add(book);
        return new Result(
                flag ? Code.BOOK_SAVE_OK : Code.BOOK_SAVE_ER,
                flag,
                flag ? Msg.BOOK_SAVE_OK : Msg.BOOK_SAVE_ER//
        );
    }

    // 请求：localhost/books/1
    // 方式：Delete
    // 参数：
    // 响应：{ "code": 20011, "data": true, "msg": "Book删除成功"}
    @DeleteMapping("/{id}")
    Result delete(@PathVariable Integer id) {
        boolean flag = bookService.deleteById(id);
        return new Result(
                flag ? Code.BOOK_DELE_OK : Code.BOOK_DELE_ER,
                flag,
                flag ? Msg.BOOK_DELE_OK : Msg.BOOK_DELE_ER);
    }

    // 请求：localhost/books/1
    // 方式：Put
    // 参数：{ "id":1, "name":"post-test1", "author":"dyg", "description":"descrip"}
    // 响应：{ "code": 20021, "data": true, "msg": "Book更新成功"}
    @PutMapping
    Result update(@RequestBody Book book) {
        boolean flag = bookService.update(book);
        return new Result(
                flag ? Code.BOOK_UPDT_OK : Code.BOOK_UPDT_ER,
                flag,
                flag ? Msg.BOOK_UPDT_OK : Msg.BOOK_UPDT_ER);
    }

    // 请求：localhost/books/8
    // 方式：Get
    // 参数：
    // 响应：{ "code": 20031, "data": { "id": 8, "name": "post-tes1t", "author": "me",
    // "description": "des" }, "msg": "Book查找成功"}
    @GetMapping("/{id}")
    Result getById(@PathVariable Integer id) {
        Book res = bookService.getById(id);
        return new Result(
                res != null ? Code.BOOK_FIND_OK : Code.BOOK_FIND_ER,
                res,
                res != null ? Msg.BOOK_FIND_OK : Msg.BOOK_FIND_ER);

    }

    // 请求：localhost/books/
    // 方式：Get
    // 参数：
    // 响应： { "code": 20031, "data": [ { "id": 8, "name": "post-tes1t",
    // "author":"me", "description": "des" } ], "msg": "Book查找成功" }
    @GetMapping
    Result selectAll() {
        List<Book> res = bookService.selectAll();
        return new Result(
                res != null ? Code.BOOK_FIND_OK : Code.BOOK_FIND_ER,
                res,
                res != null ? Msg.BOOK_FIND_OK : Msg.BOOK_FIND_ER);
    }
}
